import React, { useContext, useEffect, useState } from 'react';

import Left from './SignInForm';
import Right from './WelcomeMessage';

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
		<div className='row outline w100'>
			{!isMobile && <Right />}
			<Left handleLogin={handleLogin} />
		</div>
	);
};

export default SignIn;
