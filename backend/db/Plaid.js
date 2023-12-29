require('dotenv').config();
const { PlaidApi } = require('plaid');
// Initialize the Plaid client
const client = new PlaidApi({
	clientID: process.env.PLAID_CLIENT_ID,
	secret: process.env.PLAID_SECRET,
	env: 'sandbox',
});

module.exports = {
	client,
};
