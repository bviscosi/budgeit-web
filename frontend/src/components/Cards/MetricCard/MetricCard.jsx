import { Box, Card, Stack, Typography, styled } from '@mui/material';

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

const MetricCard = ({ title, value, icon, backgroundColor, color }) => {
	return (
		// <GradientBorderWrapper>
		<Card
			sx={{
				height: '100%',
				padding: '1rem',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
				// background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
				border: '1px ',
			}}>
			<Stack
				direction='column'
				justifyContent='space-between'
				width='100%'
				height='100%'
				spacing={1}>
				<Stack direction='row' alignItems={'center'} spacing={3}>
					<Box
						sx={{
							height: '3rem',
							width: '3rem',
							borderRadius: '100%',
							padding: '1rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: backgroundColor,
							color: color,
						}}>
						{icon}
					</Box>
					<Typography variant='h6'>{title}</Typography>
				</Stack>

				<Typography variant='h4'>${value}</Typography>
			</Stack>
		</Card>
		// </GradientBorderWrapper>
	);
};

export default MetricCard;
