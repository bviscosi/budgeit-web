import { AppBar, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { navbarContent } from '../../utils/assets';
import GetStartedButton from '../Buttons/GetStartedButton';
import ThemeModeToggle from '../ThemeModeToggle/ThemeModeToggle';
import MenuIcon from '@mui/icons-material/Menu';

const { logo } = navbarContent;

const Navbar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<AppBar
			elevation={0}
			sx={{
				height: 72,
				bgcolor: 'transparent',
				backdropFilter: 'blur(30px)',
				justifyContent: 'center',
			}}>
			<Stack direction={'row'} justifyContent={'space-between'} p={3}>
				<Stack direction='row' alignItems={'center'} spacing={1}>
					<img src={logo} alt='logo' style={{ height: '50px', objectFit: 'contain' }} />
					{/* <Typography fontWeight={600} variant='h4'>
						BudgeIt
					</Typography> */}
				</Stack>

				{isMobile ? (
					<IconButton>
						<MenuIcon color='text-secondary' />
					</IconButton>
				) : (
					<Stack direction={'row'}>
						<ThemeModeToggle />
						<GetStartedButton />
					</Stack>
				)}
			</Stack>
		</AppBar>
	);
};

export default Navbar;
