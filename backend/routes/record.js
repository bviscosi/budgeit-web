const express = require('express');
const recordRoutes = express.Router();

recordRoutes.route('/signIn').post(async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(email, password);
		if (email === 'test@gmail.com' && password === 'password') {
			res.status(200).json({ message: 'Signed in successfully' });
		} else if (email !== 'test@gmail.com') {
			res.status(404).json({ message: 'User not found. Please try again.' });
		} else if (password != 'password') {
			res.status(401).json({ message: 'Invalid password. Please try again.' });
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

module.exports = recordRoutes;
