import { IconButton, Stack } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useCustomTheme } from '../../context/ThemeContext.jsx';

const ThemeModeToggle = () => {
	const { toggleThemeMode, mode } = useCustomTheme(); // Get the current mode from the context

	return (
		<Stack sx={{ justifyContent: 'center', px: 3 }}>
			<IconButton
				onClick={toggleThemeMode}
				sx={{
					color: 'text.secondary',
					height: '40px',
					width: '40px',
					borderRadius: '100%',
					border: '1px solid #474747',
				}}>
				{mode === 'dark' ? <LightModeIcon fontSize='medium' /> : <DarkModeIcon />}
			</IconButton>
		</Stack>
	);
};

export default ThemeModeToggle;
