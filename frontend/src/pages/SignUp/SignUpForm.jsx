import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, TextField, alpha, Box, Stack } from '@mui/material';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import AuthButton from '../../components/Buttons/AuthButton';

const SignUpForm = ({ handleLogin }) => {
	let navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');

	const handleSignUp = async (email, password) => {
		try {
			const response = await axios.post('/signUp', { email, password });
			if (response.status === 201) {
				localStorage.setItem('token', response.data.token);
				console.log(response.data.token);
				handleLogin(); // Make sure this function correctly sets the logged-in state
				navigate('/plaid-link');
			}
		} catch (error) {
			console.error(error);
			if (error.response) {
				switch (error.response.status) {
					case 400:
						setErrorMessage('User already exists.');
						break;
					case 401:
						setErrorMessage('Invalid password. Please try again.');
						break;
					case 404:
						setErrorMessage('User not found. Please try again.');
						break;
					default:
						setErrorMessage('An error occurred. Please try again.');
				}
			} else {
				setErrorMessage('An unexpected error occurred. Please try again.');
			}
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		handleSignUp(data.get('email'), data.get('password'));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
				background: `linear-gradient(#0f0c15, ${alpha('#0f0c15', 0.1)})`,
			}}>
			<Stack
				component='form'
				onSubmit={handleSubmit}
				noValidate
				gap={2}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					maxWidth: 480,
					paddingX: '2rem',
				}}>
				<Box component='img' src={b_logo} alt='' sx={{ width: '8rem' }} />

				<TextField
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='password'
					label='Password'
					type='password'
					id='password'
					autoComplete='current-password'
				/>
				{errorMessage && (
					<Typography color='error' textAlign='center' sx={{ mt: 2 }}>
						{errorMessage}
					</Typography>
				)}

				<AuthButton label={'Sign Up'} onClick={handleSignUp} />

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
						sx={{ textTransform: 'none', fontSize: '1.1rem' }}
						onClick={() => navigate('/sign-in')}>
						Sign In
					</Button>
				</div>
			</Stack>
		</Box>
	);
};

export default SignUpForm;
