import { useState } from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { useTransactions } from '../../../../../context/TransactionsContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const Categories = () => {
	const [categoryTotals, setCategoryTotals] = useState({});
	const { transactions, loading, error } = useTransactions();

	const data = {
		labels: Object.keys(
			transactions.reduce((acc, transaction) => {
				const category = transaction.category[0];
				if (!acc[category]) {
					acc[category] = 0;
				}
				acc[category] += parseFloat(transaction.amount); // Ensure the amount is parsed as a number
				return acc;
			}, {})
		),
		datasets: [
			{
				data: Object.values(
					transactions.reduce((acc, transaction) => {
						const category = transaction.category[0];
						if (!acc[category]) {
							acc[category] = 0;
						}
						acc[category] += parseFloat(transaction.amount); // Ensure the amount is parsed as a number
						return acc;
					}, {})
				),
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
