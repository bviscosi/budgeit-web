import { useEffect, useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import axios from 'axios';

const Income = () => {
	const [income, setIncome] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const addJwtHeader = () => {
		const token = localStorage.getItem('token');
		return token ? { Authorization: `Bearer ${token}` } : {};
	};

	// get current balance
	useEffect(() => {
		const fetchIncome = async (startDate, endDate) => {
			setLoading(true);
			setError('');
			try {
				const response = await axios.get(`/income?startDate=${startDate}&endDate=${endDate}`, {
					headers: addJwtHeader(),
				});
				setIncome(response.data);
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		// Example dates, replace with actual dynamic dates
		const startDate = '2023-11-01';
		const endDate = '2024-01-01';
		fetchIncome(startDate, endDate);
	}, []);

	return (
		<MetricCard
			title={'Income'}
			icon={<ArrowUpwardIcon />}
			color={'rgb(28, 213, 148)'}
			backgroundColor={'rgb(28, 213, 148, 0.5)'}
			value='100,000'
		/>
	);
};

export default Income;
