import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSignIn = async () => {};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSignIn();
		}
	};

	return (
		<div className='signin-container'>
			<form className='signin-form'>
				<h2>Sign In</h2>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
					onKeyPress={handleKeyPress} // Added keypress event handler
				/>

				<input
					type='password'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
					onKeyPress={handleKeyPress} // Added keypress event handler
				/>

				{errorMessage && <div className='error-message'>{errorMessage}</div>}

				<button onClick={handleSignIn}>Sign In</button>
			</form>
		</div>
	);
};

export default SignIn;
