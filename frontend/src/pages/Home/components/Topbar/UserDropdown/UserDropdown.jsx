import { Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileCircle } from './styles.jsx';
import { useTheme } from '../../../../../context/ThemeContext';

import React from 'react';

const UserDropdown = () => {
	const { theme } = useTheme();

	return (
		<Button
			sx={{
				border: `1px solid ${theme.palette.card.border}`,
				borderRadius: '30px',
				boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
				// backgroundColor: '#F7F8FA',
			}}>
			<div style={profileCircle}></div>

			<Typography variant='h4' style={{ margin: '0', marginRight: '0.5rem' }}>
				Ben Viscosi
			</Typography>
			<KeyboardArrowDownIcon />
		</Button>
	);
};

export default UserDropdown;
