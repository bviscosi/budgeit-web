import {
	AppBar,
	Box,
	Button,
	Divider,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
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
				px: 20,
				bgcolor: 'transparent',
				backdropFilter: 'blur(30px)',
				justifyContent: 'center',
			}}>
			<Stack direction={'column'}>
				<Stack direction={'row'} justifyContent={'space-between'} py={3}>
					<Stack direction='row' alignItems={'center'}>
						<img src={logo} alt='logo' style={{ height: '50px', objectFit: 'contain' }} />
						<Typography variant='body2' fontWeight={500}>
							BudgeIt
						</Typography>
					</Stack>
					<Stack
						direction='row'
						alignItems={'center'}
						spacing={3}
						sx={{ border: '1px solid #3b3c3f', borderRadius: 10, px: 2 }}>
						<Button sx={{ color: '#fff' }}>
							<Typography variant='caption'>Features</Typography>
						</Button>
						<Button sx={{ color: '#fff' }}>
							<Typography variant='caption'>Testimonials</Typography>
						</Button>
						<Button sx={{ color: '#fff' }}>
							<Typography variant='caption'>Highlights</Typography>
						</Button>
						<Button sx={{ color: '#fff' }}>
							<Typography variant='caption'>Pricing</Typography>
						</Button>
						<Button sx={{ color: '#fff' }}>
							<Typography variant='caption'>FAQ</Typography>
						</Button>
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
				<Divider
					sx={{
						alignSelf: 'stretch',
						border: 0,
						height: '1px',
						background: 'linear-gradient(to right, transparent, #414143, transparent)',
					}}
				/>
			</Stack>
		</AppBar>
	);
};

export default Navbar;
