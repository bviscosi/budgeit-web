import { createTheme } from '@mui/material/styles';

// Define light mode colors and typography
const lightTheme = {
	palette: {
		primary: { main: '#3f51b5' },
		secondary: { main: '#f50057' },
		// Define other colors for light mode as needed
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
			fontWeight: 500,
			color: '272727',
		},
		// Define other typography styles as needed for light mode
	},
};

// Define dark mode colors and typography
const darkTheme = {
	palette: {
		primary: { main: '#6573c3' },
		secondary: { main: '#ff4081' },
		// Define other colors for dark mode as needed
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
			fontWeight: 500,
			color: '#f7f7f7',
		},
		// Define other typography styles as needed for dark mode
	},
};

// Function to get theme based on mode
export const getTheme = (mode) =>
	createTheme({
		...(mode === 'light' ? lightTheme : darkTheme),
	});

// Usage
// const theme = getTheme('light'); // or 'dark'
