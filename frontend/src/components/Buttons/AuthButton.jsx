import { Button, Typography } from '@mui/material';

const AuthButton = ({ label, sx }) => {
	return (
		<Button
			variant='contained'
			type='submit'
			fullWidth
			sx={{
				borderRadius: '1rem',
				pt: '1.5rem',
				pb: '1.5rem',
				...sx,
			}}>
			<Typography variant='h5' color='white'>
				{label}
			</Typography>
		</Button>
	);
};

export default AuthButton;
