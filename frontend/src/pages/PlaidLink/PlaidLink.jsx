import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000/';

const PlaidLink = () => {
	const navigate = useNavigate();

	// State for Plaid Link token and public token
	const [linkToken, setLinkToken] = useState(null);
	const [publicToken, setPublicToken] = useState(null);

	// Function to add JWT to Axios request headers
	const addJwtHeader = () => {
		const token = localStorage.getItem('token');
		return token ? { Authorization: `Bearer ${token}` } : {};
	};

	// Fetch the link_token from your backend
	useEffect(() => {
		const fetchLinkToken = async () => {
			try {
				const response = await axios.get('/createLinkToken', { headers: addJwtHeader() });
				setLinkToken(response.data.link_token);
			} catch (error) {
				console.error('Error fetching link token: ', error);
				// Optionally, handle the error in the UI
			}
		};

		fetchLinkToken();
	}, []);

	// Exchange public token for an access token
	useEffect(() => {
		if (publicToken) {
			const exchangeToken = async () => {
				try {
					const response = await axios.post(
						'/token-exchange',
						{ publicToken },
						{ headers: addJwtHeader() }
					);
					console.log('Access Token Exchange Response: ', response);
					// Optionally, handle the response or navigate to another route
				} catch (error) {
					console.error('Error exchanging public token: ', error);
					// Optionally, handle the error in the UI
				}
			};

			exchangeToken();
		}
	}, [publicToken]);

	// Configuration for Plaid Link
	const plaidLinkConfig = {
		token: linkToken,
		onSuccess: (publicToken, metadata) => {
			setPublicToken(publicToken);
			navigate('/home');
			console.log('Public Token: ', publicToken);
		},
		onExit: (error, metadata) => {
			console.log('Plaid Link Exited: ', error, metadata);
			// Optionally, handle the exit scenario in the UI
		},
		// Add other configurations as needed
	};

	// Initialize Plaid Link with the configuration
	const { open: openPlaid, ready: readyPlaid } = usePlaidLink(plaidLinkConfig);

	// Automatically open Plaid Link when ready
	useEffect(() => {
		if (readyPlaid && linkToken) {
			openPlaid();
		}
	}, [linkToken, openPlaid, readyPlaid]);

	return <div>{/* You can add additional UI elements here if needed */}</div>;
};

export default PlaidLink;
