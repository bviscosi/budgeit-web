import { useEffect, useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import axios from 'axios';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
import { Skeleton } from '@mui/material';

const Income = () => {
	const [income, setIncome] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	// get income
	useEffect(() => {
		const fetchIncome = async (startDate, endDate) => {
			setLoading(true);
			setError('');
			try {
				const response = await axios.get(
					`/totalIncomeThisMonth?startDate=${startDate}&endDate=${endDate}`,
					{
						headers: addJwtHeader(),
					}
				);
				setIncome(response.data.income);
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
			loading={loading}
			color={'rgb(28, 213, 148)'}
			backgroundColor={'rgb(28, 213, 148, 0.5)'}
			value={income}
		/>
	);
};

export default Income;
