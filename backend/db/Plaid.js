require('dotenv').config();
const plaid = require('plaid');
// Initialize the Plaid client
const client = new plaid.Client({
	clientID: process.env.PLAID_CLIENT_ID,
	secret: process.env.PLAID_SECRET,
	env: plaid.environments.sandbox,
});

// Account filtering isn't required here, but sometimes
// it's helpful to see an example.
const request: LinkTokenCreateRequest = {
	user: {
		client_user_id: 'user-id',
		phone_number: '+1 415 5550123',
	},
	client_name: 'Personal Finance App',
	products: ['transactions'],
	country_codes: ['US'],
	language: 'en',
	required_if_supported_products: ['liabilities'],
	webhook: 'https://sample-web-hook.com',
	redirect_uri: 'https://domainname.com/oauth-page.html',
	account_filters: {
		depository: {
			account_subtypes: ['checking', 'savings'],
		},
		credit: {
			account_subtypes: ['credit card'],
		},
	},
};

module.exports = {
	client,
};
