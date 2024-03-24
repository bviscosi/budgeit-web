import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import GetStartedButton from '../../../components/Buttons/GetStartedButton';

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
		<Box>
			<Container sx={{ height: '80vh' }}>
				<Stack sx={{ height: 'inherit' }} justifyContent='center'>
					<Typography variant='h1' sx={{ mb: 1, letterSpacing: '0.02em' }}>
						Save smarter with BudgeIt
					</Typography>
					{/* <Typography variant='h2'>Smart tools for smarter savings</Typography> */}
					<Typography variant='h2' sx={{ mb: 6, letterSpacing: '0.05em' }}>
						Effortless budgeting, simplified savings.
					</Typography>
					<Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4}>
						<GetStartedButton sx={{ height: 58, px: 3 }} fullWidth={isMobile} />
						<LearnMoreButton fullWidth={isMobile} />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Hero;
