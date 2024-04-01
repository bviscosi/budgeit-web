import { IconButton, Stack } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useCustomTheme } from '../../context/ThemeContext.jsx';

const ThemeModeToggle = () => {
	const { toggleThemeMode, mode } = useCustomTheme(); // Get the current mode from the context

	return (
		<Stack sx={{ justifyContent: 'center', px: 3 }}>
			<IconButton onClick={toggleThemeMode} sx={{ color: 'text.secondary' }}>
				{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
			</IconButton>
		</Stack>
	);
};

export default ThemeModeToggle;
