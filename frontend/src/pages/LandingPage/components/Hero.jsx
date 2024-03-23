import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
	return (
		<Box>
			<Container sx={{ height: '80vh', border: '1px solid white' }}>
				<Stack sx={{ height: 'inherit' }} justifyContent='center'>
					<Typography variant='h1'>Save smarter with BudgeIt</Typography>
					<Typography variant='h2'>Smart tools for smarter savings</Typography>
					<Stack direction='row'>
						<Button variant='container' sx={{ borderRadius: 4 }}>
							Get Started
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Hero;
