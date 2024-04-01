import { Box, Divider, Stack, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<Box>
			<Divider sx={{ mb: 10 }} />
			<Stack direction={'row'} p={2}>
				<Typography variant='caption'> © 2024 BudgeIt, Inc.</Typography>
			</Stack>
		</Box>
	);
};
