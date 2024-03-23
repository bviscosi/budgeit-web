import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomTheme } from '../../utils/theme/ThemeContext';

const GetStartedButton = ({ sx = {}, ...props }) => {
	const navigate = useNavigate();

	const { mode } = useCustomTheme();

	return (
		<Button
			variant='contained'
			sx={{
				borderRadius: 4,
				// background: mode === 'dark' ? 'black' : 'white',
				// color: mode === 'dark' ? 'white' : 'black',

				// boxShadow: 'inset 0/ 2px 2px 0px #5d79cf,inset 2px 0 2px 2px #5d79cf',
				...sx,
			}}
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
