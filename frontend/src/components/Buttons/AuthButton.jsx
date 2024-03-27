import { Button, Typography } from '@mui/material';

const AuthButton = ({ label, onClick }) => {
	return (
		<Button
			variant='contained'
			sx={{
				borderRadius: '1rem',
				pt: '1.5rem',
				pb: '1.5rem',
			}}
			onClick={onClick}>
			<Typography variant='h5'>{label}</Typography>
		</Button>
	);
};

export default AuthButton;
