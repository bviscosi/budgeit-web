import { Box, CircularProgress, Stack, Typography } from '@mui/material';

export const BudgetItem = ({ title, amount, limit, icon, color }) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem 0' }}>
			<Box sx={{ position: 'relative', display: 'inline-flex', marginRight: '1rem' }}>
				<CircularProgress
					variant='determinate'
					value={50}
					size={50}
					thickness={3}
					sx={{ color: `${color}` }}
				/>

				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'card.primary',
						'& > *': {
							padding: '0.1em', // Adding space around the icon
						},
					}}>
					{icon}
				</Box>
			</Box>
			<Typography variant='p' fontWeight={500} sx={{ flexGrow: 1 }}>
				{title}
			</Typography>
			<Stack direction='column' alignItems={'flex-end'}>
				<Typography variant='body' fontWeight={600}>
					{amount}
				</Typography>
				<Typography variant='caption'>
					{amount} of {limit}
				</Typography>
			</Stack>
		</Box>
	);
};
