import React from 'react';
import { Grid } from '@mui/material';
import { grid } from './styles';
import NetWorth from './components/NetWorth/NetWorth';
import IncomeVsExpenses from './components/IncomeVsExpenses/IncomeVsExpenses';

const Home = ({ handleLogout }) => {
	return (
		<Grid container spacing={{ xs: 2, sm: 2, md: 3 }} sx={grid}>
			<Grid item xs={6} md={6}>
				<NetWorth />
			</Grid>
			<Grid item xs={6} md={6}>
				<IncomeVsExpenses />
			</Grid>
		</Grid>
	);
};

export default Home;
