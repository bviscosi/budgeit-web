import { Container, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
	return (
		<Container sx={{ height: '80vh', border: '1px solid white' }}>
			<Typography variant='h1'>Take back control of your finances.</Typography>
		</Container>
	);
};

export default Hero;
