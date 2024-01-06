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

	const handleSignUp = async () => {
		try {
			console.log(email, password);
			const response = await axios.post('/signUp', { email, password });
			if (response.status === 201) {
				handleLogin(); // Make sure this function correctly sets the logged-in state
				navigate('/plaid-link');
			}
		} catch (error) {
			console.log(error);
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

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSignUp();
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
						height: '69%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-evenly',
					}}>
					<Typography variant='h5'>Email</Typography>
					<input
						style={{
							backgroundColor: theme.palette.background.paper,
							// height: '3rem',
							borderRadius: '0.5rem',
							padding: '1.5rem',
							color: theme.palette.gray[1],
							boxShadow: 'none',
							borderStyle: 'none',
							border: `1px solid ${theme.palette.gray[2]}`,
						}}
						type='email'
						placeholder='Enter your email'
						onChange={(e) => setEmail(e.target.value)}
						onKeyPress={handleKeyPress} // Added keypress event handler
					/>

					<Typography variant='h5'>Password</Typography>

					<input
						style={{
							backgroundColor: theme.palette.background.paper,
							// height: '3rem',
							borderRadius: '0.5rem',
							padding: '1.5rem',
							color: theme.palette.gray[1],
							boxShadow: 'none',
							borderStyle: 'none',
							border: `1px solid ${theme.palette.gray[2]}`,
						}}
						type='password'
						placeholder='Enter your password'
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={handleKeyPress} // Added keypress event handler
					/>

					{errorMessage && <div className='error-message'>{errorMessage}</div>}
					<div className='row jcsb w100 aic'>
						<div className='row w100 aic' style={{ gap: '0.5rem' }}>
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
					</div>

					<Button
						variant='contained'
						sx={{ borderRadius: '1rem', padding: '0.75rem' }}
						onClick={handleSignUp}>
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
