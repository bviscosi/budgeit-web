import React, { useContext, useEffect, useState } from 'react';
import './styles.css';

import Left from './Left';
import Right from './Right';

//test
const SignIn = () => {
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
			{!isMobile && <Right />}
			<Left />
		</div>
	);
};

export default SignIn;
