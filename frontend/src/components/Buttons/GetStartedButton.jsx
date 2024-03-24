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
				backgroundImage: 'linear-gradient(145deg, #ea98da, #5b6cf9)',
				boxShadow:
					mode === 'dark'
						? '0 4px 10px 0 rgba(0,0,0,0.5), inset 0 0 10px #5d79cf'
						: '0 4px 10px 0 rgba(0,0,0,0.1), inset 0 0 10px #5d79cf',
				textTransform: 'none',
				// '&:hover': {
				// 	boxShadow:
				// 		mode === 'dark'
				// 			? '0 0 20px 4px #ea98da,  inset 0 0 12px #5d79cf'
				// 			: '0 0 20px 4px #ea98da,  inset 0 0 12px #5d79cf',
				// 	transition: 'box-shadow 0.3s ease-in-out',
				// },
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
