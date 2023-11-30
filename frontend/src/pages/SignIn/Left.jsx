import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import './styles.css';

axios.defaults.baseURL = 'http://localhost:5000/';

const Left = () => {
	let navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

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
		<div className='signin-container'>
			<form className='signin-form'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '0.5rem',
					}}>
					<img src={b_logo} alt='' style={{ width: '8rem' }}></img>
					{/* <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>BudgeIt</h1> */}
				</div>

				<div
					style={{
						height: '70%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-evenly',
					}}>
					<h3>Email</h3>
					<input
						type='email'
						placeholder='Enter your email'
						onChange={(e) => setEmail(e.target.value)}
						onKeyPress={handleKeyPress} // Added keypress event handler
					/>
					<h3>Password</h3>

					<input
						type='password'
						placeholder='Enter your password'
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={handleKeyPress} // Added keypress event handler
					/>

					{errorMessage && <div className='error-message'>{errorMessage}</div>}
					<div className='row  jcsb aic'>
						<div className='row  w100 aic' style={{ gap: '0.5rem' }}>
							<input
								type='checkbox'
								id='rememberMe'
								name='rememberMe'
								checked={rememberMe}
								onChange={(e) => setRememberMe(e.target.checked)}
								style={{ width: '10%' }}
							/>
							<p style={{ fontWeight: '600' }}>Remember me</p>
						</div>
						<div className='forgotpassword' onClick={() => navigate('/register')}>
							Forgot Password?
						</div>
					</div>

					<Button variant='contained' onClick={handleSignIn}>
						Sign In
					</Button>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '0.3rem',
							marginTop: '1rem',
						}}>
						Not registered yet?
						<div className='create-account-action' onClick={() => navigate('/sign-up')}>
							Create account
						</div>
					</div>
				</div>
				{/* <h2 style={{ fontSize: '1.75rem' }}>Welcome Back</h2> */}
			</form>
		</div>
	);
};

export default Left;
