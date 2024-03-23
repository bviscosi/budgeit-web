import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedButton = ({ sx = {}, ...props }) => {
	const navigate = useNavigate();
	return (
		<Button
			variant='contained'
			sx={{ borderRadius: 4, ...sx }}
			{...props}
			onClick={() => {
				navigate('/sign-in');
			}}>
			Get Started
			<KeyboardArrowRightIcon />
		</Button>
	);
};

export default GetStartedButton;
