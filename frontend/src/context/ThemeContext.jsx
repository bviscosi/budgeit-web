import { createContext, useState, useContext } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import themeSettings from '../constants/theme';

const getTheme = (mode) =>
	responsiveFontSizes(
		createTheme({
			...themeSettings[mode],
		})
	);

const ThemeContext = createContext();

export const useCustomTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useCustomTheme() must be used within a ThemeContextProvider');
	}
	return context;
};

export const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState('light');
	const theme = getTheme(mode);

	const toggleThemeMode = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleThemeMode, mode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
