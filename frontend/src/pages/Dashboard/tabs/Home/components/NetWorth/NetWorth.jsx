import { Paper, Typography, Box, Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';
import { paper } from './styles';

const NetWorth = () => {
	return (
		<Paper sx={paper}>
			<div>
				<Typography variant='h6' fontWeight='bold'>
					Net Worth
				</Typography>
				<Typography variant='h3' fontWeight='bold'>
					$190,446.80
				</Typography>
				<Typography variant='p' style={{ color: 'red' }}>
					-$1,716.74 this month
				</Typography>
			</div>
			<Stack alignItems='center'>
				<Stack alignItems='center'>
					<CircleIcon style={{ color: 'green', fontSize: '0.75rem', marginRight: '4px' }} />
					<Typography variant='p'>Earned</Typography>
				</Stack>
				<Typography variant='h5' fontWeight='bold'>
					$504.22
				</Typography>
				<Box style={{ display: 'flex', alignItems: 'center' }}>
					<CircleIcon style={{ color: 'red', fontSize: '0.75rem', marginRight: '4px' }} />
					<Typography variant='p'>Spent</Typography>
				</Box>
				<Typography variant='h5' fontWeight='bold'>
					$2,220.96
				</Typography>
			</Stack>
		</Paper>
	);
};

export default NetWorth;
