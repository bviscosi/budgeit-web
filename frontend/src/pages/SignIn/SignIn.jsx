import React, { useContext, useState } from 'react';
import './styles.css';

import Left from './Left';
import Right from './Right';

//test
const SignIn = () => {
	return (
		<div className='row'>
			<Right />
			<Left />
		</div>
	);
};

export default SignIn;
