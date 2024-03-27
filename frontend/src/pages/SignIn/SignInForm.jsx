import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import { signInContainer, signInForm } from './styles';
import { Button, Typography, Box, Stack } from '@mui/material';
import AuthButton from '../../components/Buttons/AuthButton';

axios.defaults.baseURL = 'http://localhost:5555/';

const SignInForm = ({ handleLogin }) => {
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
				localStorage.setItem('token', response.data.accessToken);
				navigate('/dashboard');
			}
		} catch (error) {
			console.log(error.message);
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
		<Stack direction='column' style={signInContainer} sx={{ backgroundColor: 'background.main' }}>
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

					<Box
						component='input'
						sx={{
							backgroundColor: 'background.main',
							borderRadius: '0.5rem',
							padding: '1.5rem',
							boxShadow: 'none',
							width: '100%', // Adjust width as needed
							boxSizing: 'border-box', // Ensures padding does not add to the width
						}}
						type='email'
						placeholder='Enter your email'
						onChange={(e) => setEmail(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
					<Typography variant='h5'>Password</Typography>

					<Box
						component='input'
						sx={{
							backgroundColor: 'background.main',
							borderRadius: '0.5rem',
							padding: '1.5rem',
							boxShadow: 'none',
							width: '100%', // Adjust width as needed
						}}
						type='password'
						placeholder='Enter your password'
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={handleKeyPress}
					/>

					{errorMessage && <div className='error-message'>{errorMessage}</div>}
					<Stack
						direction='row'
						justifyContent={'space-between'}
						alignItems={'center'}
						width='100%'>
						<Stack
							direction='row'
							width='100%'
							justifyContent={'flex-start'}
							alignItems={'center'}
							gap={1.5}></Stack>

						<Typography
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
					</Stack>

					<AuthButton label={'Sign In'} onClick={handleSignIn} />

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.3rem',
							marginTop: '1rem',
						}}>
						<Typography> Not registered yet?</Typography>
						<Button
							variant='text'
							sx={{ textTransform: 'none' }}
							onClick={() => navigate('/sign-up')}>
							<Typography>Create account</Typography>
						</Button>
					</div>
				</div>
				{/* <h2 style={{ fontSize: '1.75rem' }}>Welcome Back</h2> */}
			</form>
		</Stack>
	);
};

export default SignInForm;
