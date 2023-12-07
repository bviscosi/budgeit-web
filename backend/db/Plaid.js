require('dotenv').config();
const plaid = require('plaid');
// Initialize the Plaid client
const client = new plaid.Client({
	clientID: process.env.PLAID_CLIENT_ID,
	secret: process.env.PLAID_SECRET,
	env: plaid.environments.sandbox,
});

module.exports = {
	client,
};
