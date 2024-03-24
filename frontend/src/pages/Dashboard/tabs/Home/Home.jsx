import React from 'react';

import NetWorth from './components/NetWorth/NetWorth';
import IncomeVsExpenses from './components/IncomeVsExpenses/IncomeVsExpenses';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MetricCard from '../../../../components/Cards/MetricCard/MetricCard';

const Home = () => {
	return (
		<Stack style={{ gap: '1.5rem', margin: '1rem' }}>
			{/* top row */}
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<MetricCard
						title={'TotalBalance'}
						icon={<AttachMoneyIcon />}
						color={'rgb(160, 146, 87)'}
						backgroundColor={'rgb(160, 146, 87, 0.5)'}
						value='100,000'
					/>
				</Grid>
				<Grid item xs={4}>
					<MetricCard
						title={'Income'}
						icon={<ArrowUpwardIcon />}
						color={'rgb(28, 213, 148)'}
						backgroundColor={'rgb(28, 213, 148, 0.5)'}
						value='100,000'
					/>
				</Grid>
				<Grid item xs={4}>
					<MetricCard
						title={'Expenses'}
						icon={<ArrowDownwardIcon />}
						color={'rgb(235, 58, 61)'}
						backgroundColor={'rgb(235, 58, 61, 0.5)'}
						value='100,000'
					/>
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
