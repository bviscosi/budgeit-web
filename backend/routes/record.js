const express = require('express');
const recordRoutes = express.Router();
const { getCloudDb } = require('../db/conn');
const { client } = require('../db/Plaid');
const jwt = require('jsonwebtoken');

recordRoutes.route('/signIn').post(async (req, res) => {
	console.log('signIn called');
	try {
		const { email, password } = req.body;
		cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');
		const user = await users.findOne({ email: email });

		if (!user) {
			res.status(404).json({ message: 'User not found. Please try again.' });
		} else if (user.password !== password) {
			res.status(401).json({ message: 'Invalid password. Please try again.' });
		} else {
			const accessToken = jwt.sign(email, process.env.JWT_ACCESS_TOKEN_SECRET);
			res.status(200).json({ accessToken: accessToken });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

recordRoutes.route('/signUp').get(async (req, res) => {
	try {
		res.status(200).json({ message: 'Signed up successfully' });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
});

recordRoutes.route('/authenticateToken').post(async (req, res) => {
	try {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];
		if (token == null) {
			res.status(401).json({ message: 'Invalid JWT Access Token' });
		} else {
			jwt.verify(token, process.env.accessToken);
		}
		res.status(200).json({ message: 'got to backend' });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
});

const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || Products.Transactions).split(',');
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(',');

recordRoutes.route('/createLinkToken').get(async (req, res) => {
	try {
		const response = await client.linkTokenCreate({
			user: {
				client_user_id: 'unique-user-id',
			},
			client_name: 'BudgeIt',
			products: PLAID_PRODUCTS,
			country_codes: PLAID_COUNTRY_CODES,
			language: 'en',
		});
		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
});

recordRoutes.route('/token-exchange').post(async (req, res) => {
	console.log('tokenExchange called');
	try {
		const { publicToken } = req.body;
		const response = await client.itemPublicTokenExchange({ public_token: publicToken });
		const accessToken = response.data.access_token;

		// Assuming 'users' is your MongoDB collection
		cloudDb = getCloudDb();
		const BudgeIt = cloudDb.db('BudgeIt');
		const users = BudgeIt.collection('users');
		await users.updateOne(
			{ _id: '656555b208ac2f652604a149' },
			{ $set: { plaidAccessToken: accessToken } }
		);

		res.status(200).json('success!');
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

module.exports = recordRoutes;
