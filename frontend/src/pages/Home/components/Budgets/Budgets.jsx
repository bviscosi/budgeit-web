import { Paper, Typography } from '@mui/material';
import React from 'react';

const budgetItems = [
	{ name: 'Travel', amount: 1200, spent: 700 },
	{ name: 'Food & Restaurants', amount: 1200, spent: 700 },
	{ name: 'Recreation', amount: 1200, spent: 700 },
	{ name: 'Credit Card', amount: 1200, spent: 700 },
];

const Budgets = () => {
	return (
		<Paper
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
				// border: `1px solid ${theme.palette.card.border}`,
				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

				// backgroundColor: '#f7f8fa',
				borderRadius: '20px',
			}}>
			<Typography variant='h3' fontSize='24px' fontWeight='bold' padding='1rem'>
				Budgets
			</Typography>
		</Paper>
	);
};

export default Budgets;
