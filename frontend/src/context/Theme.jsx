import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const lightTheme = responsiveFontSizes({
	palette: {
		primary: { main: '#3f51b5' },
		secondary: { main: '#f50057' },
		accent: { main: '#000' },
		gray: { main: '#e3e3e3' },
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
			fontWeight: 600,
			color: '#272727',
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: 500,
			color: '#272727',
		},
		h3: {
			fontSize: '2.5rem',
			fontWeight: 400,
			color: '#272727',
		},
		h4: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#272727',
		},
		h5: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#272727',
		},
		h6: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#272727',
		},
		p: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#272727',
		},
	},
});

// Define dark mode colors and typography
const darkTheme = responsiveFontSizes({
	palette: {
		primary: { main: '#6573c3' },
		secondary: { main: '#ff4081' },
		// Define other colors for dark mode as needed
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
			fontWeight: 600,
			color: '#f7f7f7',
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: 500,
			color: '#f7f7f7',
		},
		h3: {
			fontSize: '2.5rem',
			fontWeight: 400,
			color: '#f7f7f7',
		},
		h4: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#f7f7f7',
		},
		h5: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#f7f7f7',
		},
		h6: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#f7f7f7',
		},
		p: {
			fontSize: '2.5rem',
			fontWeight: 300,
			color: '#f7f7f7',
		},
	},
});

// Function to get theme based on mode
export const getTheme = (mode) =>
	createTheme({
		...(mode === 'light' ? lightTheme : darkTheme),
	});

// Usage
// const theme = getTheme('light'); // or 'dark'
// <ThemeProvider theme={theme}>
// 	<App>
// </ThemeProvider>
