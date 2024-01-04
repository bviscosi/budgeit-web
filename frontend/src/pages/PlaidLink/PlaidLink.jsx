import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000/';

const PlaidLink = () => {
	const navigate = useNavigate();
	// New state for Plaid Link token
	const [linkToken, setLinkToken] = useState(null);
	const [publicToken, setPublicToken] = useState(null);

	// Fetch the link_token from your backend
	useEffect(() => {
		const fetchLinkToken = async () => {
			const response = await axios.get('/createLinkToken');
			setLinkToken(response.data.link_token);
			console.log('Got Link Token: ', response.data.link_token);
		};

		fetchLinkToken();
	}, []);

	useEffect(() => {
		console.log('publicTokenUpdated: ', publicToken);
		if (publicToken) {
			const fetchLinkToken = async () => {
				console.log('calling token-exchange');
				const response = await axios.post('/token-exchange', { publicToken: publicToken });
				console.log('Got Access Token: ', response);
			};

			fetchLinkToken();
		}
	}, [publicToken]);

	const plaidLinkConfig = {
		token: linkToken,
		onSuccess: (publicToken, metadata) => {
			setPublicToken(publicToken);
			navigate('/home');
			console.log('Got Public Token: ', publicToken);
		},
		onExit: (error, metadata) => {
			// Handle the case when Plaid Link is exited
			console.log('Plaid Link Exited: ', error, metadata);
		},
		// ... other configurations
	};

	const { open: openPlaid, ready: readyPlaid } = usePlaidLink(plaidLinkConfig);

	useEffect(() => {
		if (readyPlaid && linkToken) {
			openPlaid();
		}
	}, [linkToken, openPlaid, readyPlaid]);

	return <div></div>;
};

export default PlaidLink;
