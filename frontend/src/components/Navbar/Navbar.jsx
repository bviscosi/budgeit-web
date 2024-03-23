import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { navbarContent } from '../../utils/assets';
import GetStartedButton from '../Buttons/GetStartedButton';
import ThemeModeToggle from '../ThemeModeToggle/ThemeModeToggle';

const { logo } = navbarContent;

const Navbar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			padding='1rem'
			border={'1px solid white'}
			alignItems={'center'}>
			<Stack direction={'row'} alignItems={'center'}>
				<img src={logo} alt='logo' height='50px' />
				{/* <Typography variant='h6' fontWeight={600}>
					BudgeIt
				</Typography> */}
			</Stack>
			<Stack direction={'row'} alignItems={'center'}>
				<ThemeModeToggle />
				<GetStartedButton />
			</Stack>
		</Stack>
	);
};

export default Navbar;
