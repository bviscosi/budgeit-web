import React from 'react';
import { Grid, Paper } from '@mui/material';
import { grid } from './styles';
import NetWorth from './components/NetWorth/NetWorth';
import IncomeVsExpenses from './components/IncomeVsExpenses/IncomeVsExpenses';

const Home = ({ handleLogout }) => {
	return (
		<Grid container spacing={{ xs: 2, sm: 2, md: 3 }} sx={grid}>
			<Grid item xs={4} md={4}>
				<NetWorth />
			</Grid>
			<Grid item xs={5} md={5}>
				<IncomeVsExpenses />
			</Grid>
			<Grid item xs={3} md={3}>
				<Paper
					sx={{
						display: 'flex',
						height: '100%',
						boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
						borderRadius: '10px',
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: '1rem',
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default Home;
