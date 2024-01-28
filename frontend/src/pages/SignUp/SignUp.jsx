import React, { useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import SignUpForm from './SignUpForm';

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
		<div className='row'>
			{!isMobile && <WelcomeMessage />}
			<SignUpForm handleLogin={handleLogin} />
		</div>
	);
};

export default SignUp;
