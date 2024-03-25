import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import GetStartedButton from '../../../components/Buttons/GetStartedButton';
import { landingPageContent } from '../../../utils/assets';

const { dashboard } = landingPageContent;

const LearnMoreButton = ({ fullWidth }) => {
	return (
		<Button
			variant='outlined'
			sx={{
				borderRadius: 4,
				height: 58,
				px: 3,
				color: 'text.primary',
				borderColor: 'text.primary',
			}}
			fullWidth={fullWidth}>
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
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}
			</style>
			<Stack direction='column'>
				<Container sx={{ marginTop: '10rem' }}>
					<Stack
						direction='column'
						sx={{
							height: 'inherit',
							textAlign: 'center',
							alignItems: 'center',
							width: '100%',
						}}
						justifyContent='center'>
						<Typography
							variant='h1'
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
						<Typography variant='h3' sx={{ mb: 6, letterSpacing: '0.05em' }}>
							Effortless budgeting, simplified savings.
						</Typography>
						<Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4}>
							<GetStartedButton sx={{ height: 58, px: 3 }} fullWidth={isMobile} />
							<LearnMoreButton fullWidth={isMobile} />
						</Stack>
					</Stack>
				</Container>
				<img
					src={dashboard}
					alt=''
					style={{
						margin: '5rem 15rem 0 15rem',
						borderRadius: '1rem',
						border: '2px solid #1e1e23',
						boxShadow: '0 0 24px 12px #15121a',
					}}
				/>
			</Stack>
		</>
	);
};

export default Hero;
