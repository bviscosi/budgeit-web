import { useEffect, useState } from 'react';

import WelcomeMessage from './WelcomeMessage';
import SignInForm from './SignInForm';
import { Stack } from '@mui/material';

//test
const SignIn = ({ handleLogin }) => {
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
		<Stack direction={'row'}>
			{!isMobile && <WelcomeMessage />}
			<SignInForm handleLogin={handleLogin} />
		</Stack>
	);
};

export default SignIn;
