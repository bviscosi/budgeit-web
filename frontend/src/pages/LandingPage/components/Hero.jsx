import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
	return (
		<Container sx={{ height: '80vh', border: '1px solid white' }}>
			<Stack sx={{ height: 'inherit' }} justifyContent='center'>
				<Typography variant='h1'>Take back control of your finances.</Typography>
				<Button>Get Started</Button>
			</Stack>
		</Container>
	);
};

export default Hero;
