import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import Button from '@mui/material/Button';

axios.defaults.baseURL = 'http://localhost:5000/';

const SignIn = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSignIn = async () => {
		try {
			const response = await axios.post('/signIn', { email, password });
			if (response.status === 200) {
				navigate('/home');
			}
		} catch (error) {
			console.log(error);
			// Handle other errors
			if (error.response.status === 401) {
				setErrorMessage('Invalid password. Please try again.');
			} else if (error.response.status === 404) {
				setErrorMessage('User not found. Please try again.');
			}
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSignIn();
		}
	};

	return (
		<div className='signin-container-left'>
			<div className='signin-form-border'>
				<form className='signin-form'>
					<div>
						<img src={b_logo} alt='' className='glogo'></img>
					</div>
					{/* <h2>Sign In</h2> */}

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

					{(errorMessage && <div className='error-message'>{errorMessage}</div>) || (
						<div className='error-message'></div>
					)}

					<Button onClick={handleSignIn}>Sign In</Button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
