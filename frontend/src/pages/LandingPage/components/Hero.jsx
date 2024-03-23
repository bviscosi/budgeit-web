import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import GetStartedButton from '../../../components/Buttons/GetStartedButton';

const Hero = () => {
	return (
		<Box>
			<Container sx={{ height: '80vh', border: '1px solid white' }}>
				<Stack sx={{ height: 'inherit' }} justifyContent='center'>
					<Typography variant='h1'>Save smarter with BudgeIt</Typography>
					{/* <Typography variant='h2'>Smart tools for smarter savings</Typography> */}
					<Typography variant='h2'>Effortless budgeting, simplified savings.</Typography>
					<Stack direction='row'>
						<GetStartedButton sx={{ height: 58, px: 3 }} />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Hero;
