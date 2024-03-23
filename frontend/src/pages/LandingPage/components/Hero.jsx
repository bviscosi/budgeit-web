import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import GetStartedButton from '../../../components/Buttons/GetStartedButton';

const LearnMoreButton = () => {
	return (
		<Button variant='outlined' sx={{ borderRadius: 4, height: 58, px: 3 }}>
			Learn More
		</Button>
	);
};
const Hero = () => {
	return (
		<Box>
			<Container sx={{ height: '80vh', border: '1px solid white' }}>
				<Stack sx={{ height: 'inherit' }} justifyContent='center'>
					<Typography variant='h1'>Save smarter with BudgeIt</Typography>
					{/* <Typography variant='h2'>Smart tools for smarter savings</Typography> */}
					<Typography variant='h2'>Effortless budgeting, simplified savings.</Typography>
					<Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4}>
						<GetStartedButton sx={{ height: 58, px: 3 }} />
						<LearnMoreButton />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Hero;
