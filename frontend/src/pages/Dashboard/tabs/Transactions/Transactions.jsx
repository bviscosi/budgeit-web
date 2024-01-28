import { Grid } from '@mui/material';
import React from 'react';
import { grid } from './styles';

const Transactions = () => {
	return (
		<Grid container spacing={{ xs: 2, sm: 2, md: 3 }} sx={grid}>
			<Grid item xs={6} md={6}></Grid>
		</Grid>
	);
};

export default Transactions;
