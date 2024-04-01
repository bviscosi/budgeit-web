import { Typography } from '@mui/material';
import { useCustomTheme } from '../../context/ThemeContext';

const WelcomeMessage = () => {
	const { theme } = useCustomTheme();

	return (
		<div
			style={{
				display: 'flex',
				width: '50vw',
				height: '100vh',
				justifyContent: 'center',
				background: theme.palette.background.purpleGradient,
			}}>
			<div
				style={{
					color: '#f7f7f7',
					width: '50vw',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<div>
					<Typography variant='h1'>Welcome Back</Typography>
					<Typography variant='h4'>Please login to access your account</Typography>
				</div>
			</div>
		</div>
	);
};

export default WelcomeMessage;
