import {
	AppBar,
	Button,
	Container,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React from 'react';
import { navbarContent } from '../../utils/assets';
import GetStartedButton from '../Buttons/GetStartedButton';
import ThemeModeToggle from '../ThemeModeToggle/ThemeModeToggle';

const { logo } = navbarContent;

const Navbar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<AppBar
			elevation={0}
			sx={{ height: 72, bgcolor: 'transparent', backdropFilter: 'blur(10px)' }}>
			{/* <Container> */}
			<Stack direction={'row'} justifyContent={'space-between'} p={3}>
				<img src={logo} alt='logo' style={{ height: '44px', objectFit: 'contain' }} />
				<Stack direction={'row'}>
					<ThemeModeToggle />
					<GetStartedButton />
				</Stack>
			</Stack>
			{/* </Container> */}
		</AppBar>
	);
};

export default Navbar;
