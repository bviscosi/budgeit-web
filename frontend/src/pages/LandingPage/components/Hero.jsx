import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
	alpha,
} from '@mui/material';
import GetStartedButton from '../../../components/Buttons/GetStartedButton';
import { landingPageContent } from '../../../utils/assets';

import grid from '../../../assets/grid.png';
const { dashboardLight, dashboardDark } = landingPageContent;

const LearnMoreButton = ({ sx = {}, ...props }) => {
	return (
		<Button
			variant='outlined'
			sx={{
				borderRadius: 4,
				height: 58,
				px: 3,
				color: 'text.primary',
				borderColor: 'text.primary',
				textTransform: 'none',

				...sx,
			}}
			{...props}>
			Learn More
		</Button>
	);
};

const Hero = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<style>
				{`
                @keyframes gradientAnimation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}
			</style>
			<Stack direction='column'>
				<Container sx={{ marginTop: 20 }}>
					<Stack
						direction='column'
						sx={{
							height: 'inherit',
							textAlign: 'center',
						}}
						justifyContent='center'>
						<img
							src={grid}
							alt='grid'
							style={{
								position: 'absolute',
								top: '0',
								left: '0%',
								width: '100vw',
								zIndex: '-1000',
							}}
						/>
						<Typography
							variant='h1'
							fontWeight={600}
							sx={{ mb: 1, letterSpacing: '0.02em', display: 'inline' }}>
							Save smarter with{' '}
							<Box
								component='span'
								sx={{
									background: 'linear-gradient(to right, #6e72f3,#fcb0f3 )',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text',
									textFillColor: 'transparent',
									animation: 'gradientAnimation 5s ease infinite',
									backgroundSize: '200% 200%',
								}}>
								Budgit
							</Box>
						</Typography>
						<Typography variant='h6' sx={{ mb: 6, letterSpacing: '0.05em' }}>
							Effortless budgeting, simplified savings.
						</Typography>
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							sx={{ justifyContent: 'center' }}
							alignItems='center'
							marginX={5}
							spacing={2}>
							<GetStartedButton sx={{ height: 58, px: 6 }} fullWidth={isMobile} />
							<LearnMoreButton sx={{ height: 58, px: 6 }} fullWidth={isMobile} />
						</Stack>
					</Stack>
				</Container>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						pt: { xs: 5, sm: 0 },
						pb: { xs: 8, sm: 12 },
					}}>
					<Box
						id='image'
						sx={(theme) => ({
							mt: { xs: 0, sm: 10 },
							alignSelf: 'center',
							height: { xs: 300, sm: 700 },
							width: '100%',
							backgroundImage:
								theme.palette.mode === 'light'
									? `url(${dashboardLight})`
									: `url(${dashboardDark})`,
							backgroundSize: 'cover',
							borderRadius: '10px',
							outline: '1px solid',
							outlineColor:
								theme.palette.mode === 'light'
									? alpha('#eff1f5', 0.5)
									: alpha('#d592df', 0.1),
							boxShadow:
								theme.palette.mode === 'light'
									? `0 0 12px 8px ${alpha('#6f71f3', 0.2)}`
									: `0 0 24px 12px ${alpha('#6f71f3', 0.2)}`,
						})}
					/>
				</Container>
			</Stack>
		</>
	);
};

export default Hero;
