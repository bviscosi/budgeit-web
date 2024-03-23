import React, { useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import SignUpForm from './SignUpForm';
import { Stack } from '@mui/material';

const SignUp = ({ handleLogin }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1000);
		};

		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<Stack direction='row'>
			{!isMobile && <WelcomeMessage />}
			<SignUpForm handleLogin={handleLogin} />
		</Stack>
	);
};

export default SignUp;
