import React from 'react';

import NetWorth from './components/NetWorth/NetWorth';
import IncomeVsExpenses from './components/IncomeVsExpenses/IncomeVsExpenses';
import { Box, Grid, Stack } from '@mui/material';

const Home = () => {
	return (
		<Stack style={{ gap: '1.5rem', margin: '1rem' }}>
			{/* top row */}
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<Stack
						sx={{
							border: '1px solid white',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Balance
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<Stack
						sx={{
							border: '1px solid white',
							height: '10rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Income
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<Stack
						sx={{
							border: '1px solid white',
							height: '10rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Expenses
					</Stack>
				</Grid>
			</Grid>
			{/* main section */}
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Stack
						sx={{
							border: '1px solid white',
							height: '27.5rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
							marginBottom: '1.5rem',
						}}>
						Your Budgets
					</Stack>
					<Stack
						sx={{
							border: '1px solid white',
							height: '30rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Cash Flow Analytics
					</Stack>
				</Grid>

				<Grid item xs={4}>
					<Stack
						sx={{
							border: '1px solid white',
							height: '59rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Recent Transactions
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default Home;
