import { useEffect, useState } from 'react';
import axios from 'axios';

import { addJwtHeader } from '../../../../../utils/addJwtHeader';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const Categories = () => {
	const [categoryTotals, setCategoryTotals] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchTransactions = async (startDate, endDate) => {
			setLoading(true);
			setError('');
			try {
				const response = await axios.get(
					`/transactions?startDate=${startDate}&endDate=${endDate}`,
					{ headers: addJwtHeader() }
				);
				const transactions = response.data.transactions;

				const totals = transactions.reduce((acc, transaction) => {
					const category = transaction.category[0];
					if (!acc[category]) {
						acc[category] = 0;
					}
					acc[category] += parseFloat(transaction.amount); // Ensure the amount is parsed as a number
					return acc;
				}, {});

				setCategoryTotals(totals);
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		const startDate = '2023-11-01';
		const endDate = '2024-01-01';
		fetchTransactions(startDate, endDate);
	}, []);

	const data = {
		labels: Object.keys(categoryTotals),
		datasets: [
			{
				data: Object.values(categoryTotals),
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					// Add more colors as needed
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					// Add more colors as needed
				],
			},
		],
	};

	const options = {};

	console.log(data);

	return (
		<Card sx={{ borderRadius: '1rem', height: '32rem', overflow: 'hidden' }}>
			<CardContent sx={{ paddingBottom: '0 !important' }}>
				<Typography variant='h4' fontWeight={600} ml={2} mt={2} sx={{ marginBottom: '1rem' }}>
					Spending by Category
				</Typography>
			</CardContent>
			<Box
				sx={{
					width: '100%',
					px: 3,
					overflowY: 'auto',
					height: 'calc(27.5rem - 64px)', // Subtract the height of the title and padding
				}}>
				<Doughnut data={data} options={options} />
			</Box>
		</Card>
	);
};

export default Categories;
