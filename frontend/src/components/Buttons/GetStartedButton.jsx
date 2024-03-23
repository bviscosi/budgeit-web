import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';

const GetStartedButton = ({ sx = {}, ...props }) => {
	return (
		<Button variant='contained' sx={{ borderRadius: 4, ...sx }} {...props}>
			Get Started
			<KeyboardArrowRightIcon />
		</Button>
	);
};

export default GetStartedButton;
