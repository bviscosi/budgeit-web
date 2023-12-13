import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import { signInContainer, signInForm } from './styles';
import { Button, Input, Typography, Container, Box, useTheme, TextField } from '@mui/material';

axios.defaults.baseURL = 'http://localhost:5000/';

const Left = ({ handleLogin }) => {
	const theme = useTheme(); // Accessing the theme

	let navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleSignIn = async () => {
		try {
			const response = await axios.post('/signIn', { email, password });
			if (response.status === 200) {
				handleLogin();
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
		<Container style={signInContainer} sx={{ backgroundColor: theme.palette.background.main }}>
			<form style={signInForm}>
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
							<Typography variant='p'>Remember me</Typography>
						</div>

						<Typography
							variant='p'
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-end',
								textAlign: 'flex-end',
								color: '#007BFF',
								cursor: 'pointer',
							}}
							onClick={() => navigate('/register')}>
							Forgot Password?
						</Typography>
					</div>

					<Button
						variant='contained'
						sx={{ borderRadius: '1rem', padding: '0.75rem' }}
						onClick={handleSignIn}>
						<Typography variant='signInButton'>Sign In</Typography>
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
						<Typography variant='p'> Not registered yet?</Typography>
						<Button
							variant='text'
							sx={{ textTransform: 'none' }}
							onClick={() => navigate('/sign-up')}>
							Create account
						</Button>
					</div>
				</div>
				{/* <h2 style={{ fontSize: '1.75rem' }}>Welcome Back</h2> */}
			</form>
		</Container>
	);
};

export default Left;
