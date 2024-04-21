const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getCloudDb } = require('../db/conn');
const { client } = require('../db/Plaid');
const ObjectId = require('mongodb').ObjectId;

const recordRoutes = express.Router();

// JWT Verification Middleware
const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) {
		return res.sendStatus(401);
	}

	jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			return res.sendStatus(403);
		}
		req.user = user;
		next();
	});
};

// SignIn Route
recordRoutes.route('/signIn').post(async (req, res) => {
	console.log('sign in called');
	try {
		const { email, password } = req.body;
		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');
		const user = await users.findOne({ email: email });

		if (!user) {
			return res.status(404).json({ message: 'User not found. Please try again.' });
		} else if (!(await bcrypt.compare(password, user.password))) {
			return res.status(401).json({ message: 'Invalid password. Please try again.' });
		} else {
			const accessToken = jwt.sign(
				{ userId: user._id, email },
				process.env.JWT_ACCESS_TOKEN_SECRET,
				{ expiresIn: '1h' }
			);
			res.status(200).json({ accessToken });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// SignUp Route
recordRoutes.route('/signUp').post(async (req, res) => {
	try {
		const { email, password } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		const existingUser = await users.findOne({ email: email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		const newUser = await users.insertOne({ email: email, password: hashedPassword });

		const token = jwt.sign(
			{ userId: newUser.insertedId.toString(), email: email },
			process.env.JWT_ACCESS_TOKEN_SECRET,
			{ expiresIn: '1h' }
		);

		res.status(201).json({ message: 'User created successfully', token: token });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Create Link Token for Plaid
recordRoutes.route('/createLinkToken').get(authenticateJWT, async (req, res) => {
	try {
		const response = await client.linkTokenCreate({
			user: {
				client_user_id: req.user.userId, // Use the userId from JWT
			},
			client_name: 'BudgeIt',
			products: process.env.PLAID_PRODUCTS.split(','),
			country_codes: process.env.PLAID_COUNTRY_CODES.split(','),
			language: 'en',
		});
		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Token Exchange
recordRoutes.route('/token-exchange').post(authenticateJWT, async (req, res) => {
	try {
		const { publicToken } = req.body;
		const response = await client.itemPublicTokenExchange({ public_token: publicToken });
		const accessToken = response.data.access_token;

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		await users.updateOne(
			{ _id: new ObjectId(req.user.userId) },
			{ $set: { plaidAccessToken: accessToken } }
		);

		res.status(200).json('Access token saved successfully');
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Fetch Transactions
recordRoutes.route('/transactions').get(authenticateJWT, async (req, res) => {
	try {
		const { startDate, endDate } = req.query;

		// Validate the startDate and endDate
		if (!startDate || !endDate) {
			return res.status(400).json({ message: 'Start date and end date are required.' });
		}

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		// Retrieve the user from the database
		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		// Check if the user has a Plaid access token
		if (!user.plaidAccessToken) {
			return res.status(400).json({ message: 'Access token not found.' });
		}

		// Fetch transactions from Plaid using the access token
		const response = await client.transactionsGet({
			access_token: user.plaidAccessToken,
			start_date: startDate,
			end_date: endDate,
		});

		// Send the transactions back to the client
		res.status(200).json({
			transactions: response.data.transactions.map((transaction) => {
				if (!transaction.merchant_name) {
					transaction.merchant_name = 'Unknown'; // Set merchant_name to 'Unknown' if it's null/undefined
				}
				return transaction;
			}),
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Fetch current balance
recordRoutes.route('/balance').get(authenticateJWT, async (req, res) => {
	try {
		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		// Retrieve the user from the database
		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		// Check if the user has a Plaid access token
		if (!user.plaidAccessToken) {
			return res.status(400).json({ message: 'Access token not found.' });
		}

		// Fetch transactions from Plaid using the access token
		const response = await client.accountsBalanceGet({
			access_token: user.plaidAccessToken,
		});

		// Calculate the sum of available balances
		const sumAvailableBalances = response.data.accounts.reduce((acc, account) => {
			return acc + account.balances.available;
		}, 0);

		const formattedBalance = sumAvailableBalances.toFixed(2);

		// Send the transactions back to the client
		res.status(200).json({ balance: formattedBalance });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Fetch income
recordRoutes.route('/income').get(authenticateJWT, async (req, res) => {
	try {
		const { startDate, endDate } = req.query;

		// Validate the startDate and endDate
		if (!startDate || !endDate) {
			return res.status(400).json({ message: 'Start date and end date are required.' });
		}

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		// Retrieve the user from the database
		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		// Check if the user has a Plaid access token
		if (!user.plaidAccessToken) {
			return res.status(400).json({ message: 'Access token not found.' });
		}

		// Fetch transactions from Plaid using the access token
		const response = await client.transactionsGet({
			access_token: user.plaidAccessToken,
			start_date: startDate,
			end_date: endDate,
		});

		// Calculate the total of all negative amounts
		const totalNegativeAmounts = response.data.transactions.reduce((acc, transaction) => {
			if (transaction.amount < 0) {
				acc += transaction.amount;
			}
			return acc;
		}, 0);

		// Send the absolute value of the sum back to the client
		res.status(200).json({ income: Math.abs(totalNegativeAmounts) });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Fetch expenses
recordRoutes.route('/expenses').get(authenticateJWT, async (req, res) => {
	try {
		const { startDate, endDate } = req.query;

		// Validate the startDate and endDate
		if (!startDate || !endDate) {
			return res.status(400).json({ message: 'Start date and end date are required.' });
		}

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		// Retrieve the user from the database
		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		// Check if the user has a Plaid access token
		if (!user.plaidAccessToken) {
			return res.status(400).json({ message: 'Access token not found.' });
		}

		// Fetch transactions from Plaid using the access token
		const response = await client.transactionsGet({
			access_token: user.plaidAccessToken,
			start_date: startDate,
			end_date: endDate,
		});

		// Calculate the total of all positive amounts
		const totalPositiveAmounts = response.data.transactions.reduce((acc, transaction) => {
			if (transaction.amount > 0) {
				acc += transaction.amount;
			}
			return acc;
		}, 0);

		// Send the absolute value of the sum back to the client
		res.status(200).json({ expenses: Math.abs(totalPositiveAmounts) });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

module.exports = recordRoutes;
