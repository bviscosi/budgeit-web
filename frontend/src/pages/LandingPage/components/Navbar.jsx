import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			padding='1rem'
			border={'1px solid white'}>
			<Typography variant='h4'>BudgeIt</Typography>
			<Button>Get Started</Button>
		</Stack>
	);
};

export default Navbar;
