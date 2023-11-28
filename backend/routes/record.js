const express = require('express');
const recordRoutes = express.Router();

recordRoutes.route('/signIn').post(async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(email, password);
		// Add your authentication logic here
		res.status(200).json({ message: 'Signed in successfully' });
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
