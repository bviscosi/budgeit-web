import './Error.css'; // Assuming you will create a separate CSS file
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
	const navigate = useNavigate();
	return (
		<div className='error-container'>
			<div className='error-icon'>⚠️</div> {/* Unicode Warning Sign */}
			<div className='error-message'>An error occurred. Please try again later.</div>
			<Button
				variant='contained'
				sx={{ marginTop: '5rem' }}
				onClick={() => {
					navigate('/sign-in');
				}}>
				Return to Sign In
			</Button>
		</div>
	);
};

export default Error;
