import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

const SignIn = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [response, setResponse] = useState('');

	useEffect(() => {
		async function fetch() {
			const response = await axios.get('/signIn');
			setResponse(response);
		}
		fetch();
	}, []);

	useEffect(() => {
		console.log(response);
	}, [response]);

	const handleSignIn = async () => {
		try {
			const response = { statusCode: 200 };
			if (response.statusCode === 200) {
				navigate('/home');
			} else if (response.statusCode === 401) {
				setErrorMessage('Invalid password. Please try again.');
			} else if (response.statusCode === 404) {
				setErrorMessage('User not found. Please try again.');
			}
		} catch (error) {
			// Handle other errors
			setErrorMessage('An error occurred. Please try again later.');
		}
	};

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
