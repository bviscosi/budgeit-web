const express = require('express');
const bcrypt = require('bcrypt');
const ObjectId = require('mongodb').ObjectId;
const jwt = require('jsonwebtoken');

const { getCloudDb } = require('../db/conn');
const { client } = require('../db/Plaid');
const Budget = require('../models/Budget');
const authenticateJWT = require('../middleware/authenticateJWT');

const recordRoutes = express.Router();

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
		console.log('get transactions called...');
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

				transaction.amount = transaction.amount.toFixed(2);
				transaction.date = new Date(transaction.date).toLocaleDateString('en-US', {
					month: 'short', // "short" gives the abbreviated month name (e.g., "Nov")
					day: '2-digit', // "2-digit" gives the two-digit day
					year: 'numeric', // "2-digit" gives the two-digit day
				});
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

// Protected Route: Fetch expenses by day
recordRoutes.route('/expensesByDay').get(authenticateJWT, async (req, res) => {
	try {
		const { startDate, endDate } = req.query;

		if (!startDate || !endDate) {
			return res.status(400).json({ message: 'Start date and end date are required.' });
		}

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		if (!user.plaidAccessToken) {
			return res.status(400).json({ message: 'Access token not found.' });
		}

		const response = await client.transactionsGet({
			access_token: user.plaidAccessToken,
			start_date: startDate,
			end_date: endDate,
		});

		// Process transactions to calculate daily spending
		const dailySpending = response.data.transactions.reduce((acc, transaction) => {
			// Extract the full date from the transaction date
			const date = transaction.date; // YYYY-MM-DD format
			if (!acc[date]) {
				acc[date] = 0; // Initialize if not already present
			}
			if (transaction.amount > 0) {
				acc[date] += transaction.amount; // Sum the amounts for each day
			}
			return acc;
		}, {});

		// Convert the dailySpending object to an array of more easily readable dates
		const spendingData = Object.keys(dailySpending).map((date) => {
			const formattedDate = new Date(date).toLocaleDateString('en-US', {
				month: 'short', // "short" gives the abbreviated month name (e.g., "Nov")
				day: '2-digit', // "2-digit" gives the two-digit day
			});
			return {
				date: formattedDate,
				totalSpending: dailySpending[date],
			};
		});

		// Sort by date
		spendingData.sort((b, a) => a.date.localeCompare(b.date));

		res.status(200).json({ expensesByDay: spendingData });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Protected Route: Fetch income by day
recordRoutes.route('/incomeByDay').get(authenticateJWT, async (req, res) => {
	try {
		const { startDate, endDate } = req.query;

		if (!startDate || !endDate) {
			return res.status(400).json({ message: 'Start date and end date are required.' });
		}

		const cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');

		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		if (!user.plaidAccessToken) {
			return res.status(400).json({ message: 'Access token not found.' });
		}

		const response = await client.transactionsGet({
			access_token: user.plaidAccessToken,
			start_date: startDate,
			end_date: endDate,
		});

		// Process transactions to calculate daily spending
		const dailyIncome = response.data.transactions.reduce((acc, transaction) => {
			// Extract the full date from the transaction date
			const date = transaction.date; // YYYY-MM-DD format
			if (!acc[date]) {
				acc[date] = 0; // Initialize if not already present
			}
			if (transaction.amount < 0) {
				acc[date] += -1 * transaction.amount; // Sum the amounts for each day
			}
			return acc;
		}, {});

		// Convert the dailySpending object to an array of more easily readable dates
		const incomeData = Object.keys(dailyIncome).map((date) => {
			const formattedDate = new Date(date).toLocaleDateString('en-US', {
				month: 'short', // "short" gives the abbreviated month name (e.g., "Nov")
				day: '2-digit', // "2-digit" gives the two-digit day
			});
			return {
				date: formattedDate,
				totalIncome: dailyIncome[date],
			};
		});

		// Sort by date if necessary
		incomeData.sort((b, a) => a.date.localeCompare(b.date));

		res.status(200).json({ incomeByDay: incomeData });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

// Create a new budget
recordRoutes.route('/budgets').post(authenticateJWT, async (req, res) => {
	try {
		const budget = new Budget({ ...req.body, userId: req.user._id });
		await budget.save();
		res.status(201).send(budget);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Get all budgets for a user
recordRoutes.route('/budgets').get(authenticateJWT, async (req, res) => {
	try {
		const budgets = await Budget.find({ userId: req.user._id });
		res.send(budgets);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Update a budget
recordRoutes.route('/budgets/:id').patch(authenticateJWT, async (req, res) => {
	try {
		const budget = await Budget.findOneAndUpdate(
			{ _id: req.params.id, userId: req.user._id },
			req.body,
			{ new: true }
		);
		if (!budget) {
			return res.status(404).send();
		}
		res.send(budget);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Delete a budget
recordRoutes.route('/budgets/:id').delete(authenticateJWT, async (req, res) => {
	try {
		const budget = await Budget.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
		if (!budget) {
			return res.status(404).send();
		}
		res.send(budget);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Protected Route: Fetch income
// recordRoutes.route('/totalIncomeThisMonth').get(authenticateJWT, async (req, res) => {
// 	try {
// 		const { startDate, endDate } = req.query;

// 		// Validate the startDate and endDate
// 		if (!startDate || !endDate) {
// 			return res.status(400).json({ message: 'Start date and end date are required.' });
// 		}

// 		const cloudDb = getCloudDb();
// 		const BudgeIt = cloudDb.db('BudgeIt');
// 		const users = BudgeIt.collection('users');

// 		// Retrieve the user from the database
// 		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
// 		if (!user) {
// 			return res.status(404).json({ message: 'User not found.' });
// 		}

// 		// Check if the user has a Plaid access token
// 		if (!user.plaidAccessToken) {
// 			return res.status(400).json({ message: 'Access token not found.' });
// 		}

// 		// Fetch transactions from Plaid using the access token
// 		const response = await client.transactionsGet({
// 			access_token: user.plaidAccessToken,
// 			start_date: startDate,
// 			end_date: endDate,
// 		});

// 		// Calculate the total of all negative amounts
// 		const totalNegativeAmounts = response.data.transactions.reduce((acc, transaction) => {
// 			if (transaction.amount < 0) {
// 				acc += transaction.amount;
// 			}
// 			return acc;
// 		}, 0);

// 		// Send the absolute value of the sum back to the client
// 		res.status(200).json({ income: Math.abs(totalNegativeAmounts).toFixed(2) });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ error: error.toString() });
// 	}
// });

// Protected Route: Fetch expenses
// recordRoutes.route('/totalExpensesThisMonth').get(authenticateJWT, async (req, res) => {
// 	try {
// 		const { startDate, endDate } = req.query;

// 		// Validate the startDate and endDate
// 		if (!startDate || !endDate) {
// 			return res.status(400).json({ message: 'Start date and end date are required.' });
// 		}

// 		const cloudDb = getCloudDb();
// 		const BudgeIt = cloudDb.db('BudgeIt');
// 		const users = BudgeIt.collection('users');

// 		// Retrieve the user from the database
// 		const user = await users.findOne({ _id: new ObjectId(req.user.userId) });
// 		if (!user) {
// 			return res.status(404).json({ message: 'User not found.' });
// 		}

// 		// Check if the user has a Plaid access token
// 		if (!user.plaidAccessToken) {
// 			return res.status(400).json({ message: 'Access token not found.' });
// 		}

// 		// Fetch transactions from Plaid using the access token
// 		const response = await client.transactionsGet({
// 			access_token: user.plaidAccessToken,
// 			start_date: startDate,
// 			end_date: endDate,
// 		});

// 		// Calculate the total of all positive amounts
// 		const totalPositiveAmounts = response.data.transactions.reduce((acc, transaction) => {
// 			if (transaction.amount > 0) {
// 				acc += transaction.amount;
// 			}
// 			return acc;
// 		}, 0);

// 		// Send the absolute value of the sum back to the client
// 		res.status(200).json({ expenses: Math.abs(totalPositiveAmounts).toFixed(2) });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ error: error.toString() });
// 	}
// });

module.exports = recordRoutes;
