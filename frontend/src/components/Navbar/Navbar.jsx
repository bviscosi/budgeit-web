import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { navbarContent } from '../../utils/assets';

const { logo } = navbarContent;

const Navbar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			padding='1rem'
			border={'1px solid white'}>
			<img src={logo} alt='logo' height='50px' />
			<Button>Get Started</Button>
		</Stack>
	);
};

export default Navbar;
