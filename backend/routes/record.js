const express = require('express');
const recordRoutes = express.Router();
const { getCloudDb } = require('../db/conn');
const { client } = require('../db/Plaid');

recordRoutes.route('/signIn').post(async (req, res) => {
	try {
		const { email, password } = req.body;

		client = getCloudDb();
		const BudgeIt = client.db('BudgeIt');
		const users = BudgeIt.collection('users');
		const user = await users.findOne({ email: email });
		if (!user) {
			res.status(404).json({ message: 'User not found. Please try again.' });
		} else if (user.password !== password) {
			res.status(401).json({ message: 'Invalid password. Please try again.' });
		} else {
			res.status(200).json({ message: 'Signed in successfully' });
		}
	} catch (error) {
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

// recordRoutes.route('/createLinkToken').get(async (req, res) => {
// 	try {
// 		res.status(200).json({ message: 'got to backend' });
// 	} catch (error) {
// 		res.status(500).json({ error: error.toString() });
// 	}
// });
recordRoutes.route('/createLinkToken').get(async (req, res) => {
	try {
		console.log('got in');
		const response = await plaidClient.createLinkToken({
			user: {
				// This should be a unique identifier for the user
				client_user_id: 'unique-user-id',
			},
			client_name: 'Your App Name',
			products: ['auth', 'transactions'], // Specify the Plaid products you want to use
			country_codes: ['US'], // Adjust based on your needs
			language: 'en',
			// Add other configurations if needed
		});

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
});

recordRoutes.route('/getAccessToken').get(async (req, res) => {
	try {
		res.status(200).json({ message: 'getAccessToken' });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
});

module.exports = recordRoutes;
