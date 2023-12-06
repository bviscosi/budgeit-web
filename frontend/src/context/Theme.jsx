import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const lightTheme = {

};

// Define dark mode colors and typography
const darkTheme = {
	
};

// user dropdown border -> #d8dee8
// card border -> #e6e8ec
// paper background -> #272727 || #ffffff
//

// Function to get theme based on mode
export const getTheme = (mode) =>
	responsiveFontSizes(
		createTheme({
			...(mode === 'light' ? lightTheme : darkTheme),
		})
	);

// Usage
// const theme = getTheme('light'); // or 'dark'
// <ThemeProvider theme={theme}>
// 	<App>
// </ThemeProvider>
