import { useTheme } from '@mui/material';
import React from 'react';

const WelcomeMessage = () => {
	const theme = useTheme(); // Accessing the theme

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
				<div style={{ width: '50%' }}>
					<h1 style={{ fontSize: '3rem', color: '#e6e8ec' }}>Welcome</h1>
					<h3 style={{ fontSize: '1.5rem', color: '#e6e8ec' }}>
						Please sign up to create your account
					</h3>
				</div>
			</div>
		</div>
	);
};

export default WelcomeMessage;
