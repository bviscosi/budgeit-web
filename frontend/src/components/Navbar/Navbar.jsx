import { useNavigate } from 'react-router-dom';

import {
	AppBar,
	Button,
	Divider,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { navbarContent } from '../../utils/assets';
import GetStartedButton from '../Buttons/GetStartedButton';
import ThemeModeToggle from '../ThemeModeToggle/ThemeModeToggle';

const { logo } = navbarContent;

const Navbar = ({ setOpenMenu }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<AppBar
			elevation={0}
			sx={{
				px: isMobile ? 2 : 10,
				bgcolor: 'transparent',
				backdropFilter: 'blur(30px)',
				justifyContent: 'center',
			}}>
			<Stack direction={'column'}>
				<Stack direction={'row'} justifyContent={'space-between'} py={3}>
					<Stack direction='row' alignItems={'center'}>
						<img src={logo} alt='logo' style={{ height: '50px', objectFit: 'contain' }} />
						{/* <Typography variant='h6' fontWeight={600} color='#fff'>
							BudgeIt
						</Typography> */}
					</Stack>

					{isMobile ? (
						<IconButton
							sx={{ height: '100%' }}
							onClick={() => {
								setOpenMenu(true);
							}}>
							<MenuIcon color='text-secondary' />
						</IconButton>
					) : (
						<>
							<Stack
								direction='row'
								alignItems={'center'}
								spacing={3}
								sx={{ border: '1px solid #333139', borderRadius: 10, px: 2 }}>
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
							<Stack direction={'row'}>
								<ThemeModeToggle />
								<Button
									sx={{ px: '2rem' }}
									onClick={() => {
										navigate('/sign-in');
									}}>
									<Typography variant='body2' fontWeight={600}>
										Login
									</Typography>
								</Button>
								<GetStartedButton />
							</Stack>
						</>
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
