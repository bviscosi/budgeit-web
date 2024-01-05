import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define light and dark theme colors and typography
const themes = {
	light: {
		palette: {
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
			primary: { main: '#6573c3' },
			secondary: { main: '#ff4081' },
			// Define other colors for dark mode as needed
			card: { border: '#424242' },
			gray: { 1: '#bdbdbd', 2: '#424242' },

			background: {
				paper: '#111415',
				main: '#0c0e0f',
				purpleGradient: 'linear-gradient(#242acf, #b57bee)',
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
const getTheme = (mode) => responsiveFontSizes(createTheme(themes[mode]));

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState('dark');
	const theme = getTheme(mode);

	const toggleThemeMode = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleThemeMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
