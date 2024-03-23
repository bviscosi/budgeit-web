import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
	return (
		<Stack spacing={2}>
			<Divider />
			<Stack direction={'row'} p={2}>
				<Typography variant='caption'> © 2024 BudgeIt, Inc.</Typography>
			</Stack>
		</Stack>
	);
};
