import { useState, useEffect } from 'react';
import axios from 'axios';

import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Balance = () => {
	const [balance, setBalance] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const addJwtHeader = () => {
		const token = localStorage.getItem('token');
		return token ? { Authorization: `Bearer ${token}` } : {};
	};

	// get current balance
	useEffect(() => {
		const fetchCurrentBalance = async () => {
			setLoading(true);
			setError('');
			try {
				const response = await axios.get(`/balance`, {
					headers: addJwtHeader(),
				});
				setBalance(response.data.balance);
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		fetchCurrentBalance();
	}, []);

	return (
		<MetricCard
			title={'Total Balance'}
			icon={<AttachMoneyIcon />}
			color={'rgb(160, 146, 87)'}
			backgroundColor={'rgb(160, 146, 87, 0.5)'}
			value={balance}
		/>
	);
};

export default Balance;
