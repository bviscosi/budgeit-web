import { Button, Paper } from '@mui/material';
import React from 'react';
import { lightModeButton } from './styles.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useCustomTheme } from '../../utils/theme/ThemeContext.jsx';

const ThemeModeToggle = () => {
	const { toggleThemeMode, mode } = useCustomTheme(); // Get the current mode from the context

	return (
		<Button onClick={toggleThemeMode}>
			<Paper style={lightModeButton}>
				{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
			</Paper>
		</Button>
	);
};

export default ThemeModeToggle;
