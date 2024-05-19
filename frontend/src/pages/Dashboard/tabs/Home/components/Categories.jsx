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
				borderColor: 'transparent',
				backgroundColor: [
					'#fbca26',
					'#4082f5',
					'#FFCE56',
					// Add more colors as needed
				],
				hoverBackgroundColor: [
					'#fbca26',
					'#4082f5',
					'#FFCE56',
					// Add more colors as needed
				],
			},
		],
	};

	const options = {
		cutout: 125,
		plugins: {
			legend: {
				display: true,
				position: 'right',

				labels: {
					usePointStyle: true,
				},
			},
		},
	};

	return (
		<Card sx={{ borderRadius: '1rem', height: '32rem', overflow: 'hidden' }}>
			<CardContent sx={{ paddingBottom: '0 !important' }}>
				<Typography
					variant='h4'
					fontWeight={600}
					ml={2}
					mt={2}
					color='text.primary'
					sx={{ marginBottom: '1rem' }}>
					Categories
				</Typography>
			</CardContent>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					width: '100%',
					height: 'calc(100% - 72px)', // Adjust height to fit the content
					paddingBottom: '1.5rem',
				}}>
				<Doughnut data={data} options={options} />
			</Box>
		</Card>
	);
};

export default Categories;
