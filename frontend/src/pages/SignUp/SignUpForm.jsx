import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, useTheme } from '@mui/material';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import { signUpContainer, signUpForm } from './styles';

const SignUpForm = ({ handleLogin }) => {
	let navigate = useNavigate();

	const theme = useTheme();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [rememberMe, setRememberMe] = useState(false); // If you plan to use this, add a checkbox in the form

	const handleSignUp = async (e) => {
		e.preventDefault(); // Prevent default form submission

		try {
			const response = await axios.post('/signUp', { email, password });
			if (response.status === 201) {
				// Adjust status code based on your backend
				handleLogin(); // Make sure this function correctly sets the logged-in state
				navigate('/plaid-link');
			}
		} catch (error) {
			if (error.response) {
				if (error.response.status === 401) {
					setErrorMessage('Invalid password. Please try again.');
				} else if (error.response.status === 404) {
					setErrorMessage('User not found. Please try again.');
				} else {
					setErrorMessage('An error occurred. Please try again.');
				}
			} else {
				setErrorMessage('An unexpected error occurred. Please try again.');
			}
		}
	};

	return (
		<Container style={signUpContainer} sx={{ backgroundColor: theme.palette.background.main }}>
			<form style={signUpForm} onSubmit={handleSignUp}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<img src={b_logo} alt='' style={{ width: '8rem' }}></img>
				</div>

				<div
					style={{
						height: '70%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-evenly',
					}}>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						placeholder='Enter your password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{errorMessage && <div className='error-message'>{errorMessage}</div>}

					<div className='row  w100 aic' style={{ gap: '0.5rem' }}>
						<input
							type='checkbox'
							id='rememberMe'
							name='rememberMe'
							checked={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
							style={{ width: '10%' }}
						/>
						<Typography variant='p'>Remember me</Typography>
					</div>

					<Button
						variant='contained'
						sx={{ borderRadius: '1rem', padding: '0.75rem' }}
						type='submit'>
						<Typography variant='signInButton'>Sign Up</Typography>
					</Button>

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.3rem',
							marginTop: '1rem',
						}}>
						<Typography variant='p'> Already have an account?</Typography>
						<Button
							variant='text'
							sx={{ textTransform: 'none' }}
							onClick={() => navigate('/sign-in')}>
							Sign In
						</Button>
					</div>
				</div>
			</form>
		</Container>
	);
};

export default SignUpForm;
