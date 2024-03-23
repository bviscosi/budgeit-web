import { Button } from '@mui/material';
import React from 'react';

const LaunchButton = ({ sx = {}, ...props }) => {
	return (
		<Button variant='contained' sx={{ borderRadius: 4, ...sx }} {...props}>
			LaunchButton
		</Button>
	);
};

export default LaunchButton;
