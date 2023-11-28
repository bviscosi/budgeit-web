const express = require('express');
const recordRoutes = express.Router();

recordRoutes.route('/signIn').get(async (req, res) => {
	try {
		res.json(200);
	} catch (err) {
		res.json(err.message);
	}
});

recordRoutes.route('/signUp').get(async (req, res) => {
	try {
		res.json(200);
	} catch (err) {
		res.json(err.message);
	}
});

module.exports = recordRoutes;
