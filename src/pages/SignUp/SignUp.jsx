import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSignUp = async () => {};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSignUp();
		}
	};

	return (
		<div className='signup-container'>
			<form className='signup-form'>
				<h2>Sign Up</h2>
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

				<button onClick={handleSignUp}>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
