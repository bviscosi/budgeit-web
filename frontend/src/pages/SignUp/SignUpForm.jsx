import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, TextField } from '@mui/material';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import { signUpContainer, signUpForm } from './styles';
import { useCustomTheme } from '../../context/ThemeContext';
import AuthButton from '../../components/Buttons/AuthButton';

const SignUpForm = ({ handleLogin }) => {
	let navigate = useNavigate();

	const { theme } = useCustomTheme();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [rememberMe, setRememberMe] = useState(false); // If you plan to use this, add a checkbox in the form

	const handleSignUp = async () => {
		try {
			console.log(email, password); // Consider removing console logs in production
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
					<TextField
						type='email'
						variant='outlined'
						label='Email'
						onChange={(e) => setEmail(e.target.value)}
						onKeyPress={handleKeyPress}
					/>

					<TextField
						type='password'
						variant='outlined'
						label='Password'
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={handleKeyPress}
					/>

					{errorMessage && <div className='error-message'>{errorMessage}</div>}

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
