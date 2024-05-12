import { Box, Card, Stack, Typography, styled, CardContent, Skeleton } from '@mui/material';

const GradientBorderWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	padding: '2px', // Adjusts the border thickness
	background:
		'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)',
	borderRadius: '1rem', // Match your Card's borderRadius
	'&:before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 'inherit',
		padding: '1rem', // Adjusts the space for the border inside the wrapper
		background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
		zIndex: -1,
	},
}));

const MetricCard = ({ title, value, loading, icon, backgroundColor, color }) => {
	return (
		// <GradientBorderWrapper>

		<Card
			sx={{
				height: '100%',
				padding: '1rem',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
				overflow: 'hidden',
				// background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
				// border: '1px ',
			}}>
			<CardContent sx={{ paddingBottom: '0 !important' }}>
				<Stack direction='column' justifyContent='space-between' spacing={1}>
					<Stack direction='row' justifyContent={'space-between'}>
						<Stack
							direction='column'
							alignItems='flex-start'
							justifyContent='center'
							// padding='0.5rem'
							spacing={0.75}>
							<>
								<Typography variant='h4' color='text.primary' fontWeight='600'>
									{title}
								</Typography>
								<Typography variant='p2' fontSize='14px' color='text.secondary' pt={0.5}>
									Apr 10 - May 10, 2024
								</Typography>
								<Typography variant='h3' color='text.primary' fontWeight='600' pt={2}>
									${value || 0.0}
								</Typography>
								<Typography variant='p2' fontSize='16px' color='#23c48a' pt={0.5} pb={1}>
									+27% since last period
								</Typography>
							</>
						</Stack>
						<Box
							sx={{
								height: '3rem',
								width: '3rem',
								borderRadius: '20%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: backgroundColor,
								color: color,
							}}>
							{icon}
						</Box>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
		// </GradientBorderWrapper>
	);
};

export default MetricCard;
