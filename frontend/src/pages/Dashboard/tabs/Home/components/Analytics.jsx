import { Card, Stack, styled } from '@mui/material';

const GradientBorderWrapper = styled('div')(() => ({
	height: '100%',
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

const Analytics = () => {
	return (
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
				sx={{
					height: '30rem',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '1rem',
				}}>
				Cash Flow Analytics
			</Stack>
		</Card>
	);
};

export default Analytics;
