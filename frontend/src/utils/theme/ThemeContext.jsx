import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

// Base theme settings common to both light and dark themes
const baseTheme = {
	// Add common settings, if any, like typography that doesn't change between light and dark
};

// Define light and dark theme colors and typography
const themeSettings = {
	light: {
		palette: {
			mode: 'light',
			primary: { main: '#3f51b5' },
			secondary: { main: '#f50057' },
			accent: { main: '#000' },
			gray: { 100: '#e3e3e3' },
			card: { border: '#e6e8ec' },
			background: {
				paper: '#f7f8fa',
				main: '#eff1f5',
				purpleGradient: 'linear-gradient(#242acf, #b57bee)',
			},
		},
		typography: {
			h1: {
				fontSize: '2.5rem',
				fontWeight: 600,
				color: '#272727',
			},
			h2: {
				fontSize: '2rem',
				fontWeight: 500,
				color: '#272727',
			},
			h3: {
				fontSize: '1.75rem',
				fontWeight: 400,
				color: '#272727',
			},
			h4: {
				fontSize: '1.5rem',
				fontWeight: 300,
				color: '#272727',
			},
			h5: {
				fontSize: '1.25rem',
				fontWeight: 300,
				color: '#272727',
			},
			h6: {
				fontSize: '1rem',
				fontWeight: 300,
				color: '#272727',
			},
			p: {
				fontSize: '1rem',
				fontWeight: 300,
				color: '#272727',
			},
			signInButton: {
				fontSize: '1.5rem',
				fontWeight: 600,
				color: '#272727',
			},
			button: {
				fontSize: '1.1rem',
				fontWeight: 300,
				color: '#6573c3',
			},
		},
	},
	dark: {
		palette: {
			mode: 'dark',
			primary: { main: '#6573c3' },
			secondary: { main: '#ff4081' },
			// Define other colors for dark mode as needed
			card: { border: '#424242' },
			gray: { 1: '#bdbdbd', 2: '#424242' },

			background: {
				default: '#000',
				paper: '#111415',
				main: '#0c0e0f',
				// purpleGradient: 'linear-gradient(#242acf, #b57bee)',
				purpleGradient:
					'linear-gradient(60deg, rgba(2,10,18,1) 0%, rgba(82,50,135,1) 70%, rgba(0,90,116,0.8) 100%)',
			},
		},
		typography: {
			h1: {
				fontSize: '2.5rem',
				fontWeight: 600,
				color: '#bdbdbd',
				// color: '#9e9e9e',
			},
			h2: {
				fontSize: '2rem',
				fontWeight: 500,
				color: '#bdbdbd',
			},
			h3: {
				fontSize: '1.75rem',
				fontWeight: 400,
				color: '#9e9e9e',
			},
			h4: {
				fontSize: '1.5rem',
				fontWeight: 300,
				color: '#bdbdbd',
			},
			h5: {
				fontSize: '1.25rem',
				fontWeight: 300,
				color: '#f7f7f7',
			},
			h6: {
				fontSize: '1rem',
				fontWeight: 300,
				color: '#f7f7f7',
			},
			p: {
				fontSize: '1rem',
				fontWeight: 300,
				color: '#f7f7f7',
			},
			signInButton: {
				fontSize: '1.5rem',
				fontWeight: 600,
				color: '#f7f7f7',
			},
			button: {
				fontSize: '1.1rem',
				fontWeight: 300,
				color: '#6573c3',
			},
		},
	},
};

// Function to get theme based on mode
const getTheme = (mode) =>
	responsiveFontSizes(
		createTheme({
			...baseTheme,
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
	const [mode, setMode] = useState('dark'); // This state tracks the current theme mode
	const theme = getTheme(mode);

	const toggleThemeMode = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	// Include `mode` in the value object so it can be consumed by the `useTheme` hook
	return (
		<ThemeContext.Provider value={{ theme, toggleThemeMode, mode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
