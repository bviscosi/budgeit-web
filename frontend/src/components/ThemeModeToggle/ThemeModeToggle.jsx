import { Box, Stack } from '@mui/material';
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useCustomTheme } from '../../utils/theme/ThemeContext.jsx';

const ThemeModeToggle = () => {
	const { toggleThemeMode, mode } = useCustomTheme(); // Get the current mode from the context

	return (
		<Stack sx={{ justifyContent: 'center', px: 3 }}>
			{mode === 'dark' ? (
				<LightModeIcon
					sx={{ color: 'text.secondary', cursor: 'pointer' }}
					onClick={toggleThemeMode}
				/>
			) : (
				<DarkModeIcon
					sx={{ color: 'text.secondary', cursor: 'pointer' }}
					onClick={toggleThemeMode}
				/>
			)}
		</Stack>
	);
};

export default ThemeModeToggle;
