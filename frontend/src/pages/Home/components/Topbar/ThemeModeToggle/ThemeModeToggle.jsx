import { Button, Paper } from '@mui/material';
import React from 'react';
import { useTheme } from '../../../../../context/ThemeContext';
import { lightModeButton } from './styles.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeModeToggle = () => {
	const { theme, toggleThemeMode, mode } = useTheme(); // Get the current mode from the context

	return (
		<Button onClick={toggleThemeMode}>
			<Paper style={lightModeButton}>
				{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
			</Paper>
		</Button>
	);
};

export default ThemeModeToggle;
