import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import b_logo from '../../assets/b.png';
import { Typography, Box, Stack, TextField, alpha } from '@mui/material';
import AuthButton from '../../components/Buttons/AuthButton';

axios.defaults.baseURL = 'http://localhost:5555/';

const SignInForm = ({ handleLogin }) => {
	let navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleSignIn = async (email, password) => {
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

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		handleSignIn(data.get('email'), data.get('password'));
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
				<AuthButton label='Sign In' sx={{ marginTop: 2 }} />
			</Stack>
		</Box>
	);
};

{
	/* <Stack
					direction='row'
					justifyContent={'space-between'}
					alignItems={'center'}
					width='100%'>
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
				</Stack> */
}

{
	/* <div
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
				</div> */
}
export default SignInForm;
