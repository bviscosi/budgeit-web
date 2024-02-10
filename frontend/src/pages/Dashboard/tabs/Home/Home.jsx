import React from 'react';
import { Grid, Paper } from '@mui/material';
import { grid } from './styles';
import NetWorth from './components/NetWorth/NetWorth';
import IncomeVsExpenses from './components/IncomeVsExpenses/IncomeVsExpenses';

const Home = ({ handleLogout }) => {
	return (
		<Grid container spacing={{ xs: 2, sm: 2, md: 3 }} sx={grid} border='1px solid white'>
			{/* Column 1 */}
			<Grid item xs={3} md={3} height='100%'>
				{/* <NetWorth /> */}
				{/* <Paper
					sx={{
						display: 'flex',
						height: '100%',
						boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
						borderRadius: '10px',
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: '1rem',
					}}
				/> */}
			</Grid>

			{/* Column 2 */}
			<Grid item xs={6} md={6}>
				{/* <IncomeVsExpenses /> */}
			</Grid>
			{/* Column 3 */}
			<Grid item xs={3} md={3}>
				<Paper
					sx={{
						display: 'flex',
						// height: '100%',
						boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
						borderRadius: '10px',
						flexDirection: 'row',
						justifyContent: 'space-between',
						// padding: '1rem',
					}}
				/>
			</Grid>
		</Grid>
	);
};

const Column = ({ children, gap }) => {
	return <div style={{ display: 'flex', flexDirection: 'column', gap: gap }}>{children}</div>;
};

const Row = ({ children, gap }) => {
	return <div style={{ display: 'flex', flexDirection: 'row', gap: gap }}>{children}</div>;
};

export default Home;
