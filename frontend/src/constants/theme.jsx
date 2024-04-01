import getTypography from './typography';

// Correct the function calls by removing the extra parenthesis
const lightModeTypography = getTypography('light');
const darkModeTypography = getTypography('dark');
import { alpha } from '@mui/material';

// Assuming console.log(lightModeTypography) is just for debugging and can be removed or commented out
// console.log(lightModeTypography);

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
		typography: lightModeTypography, // Apply the typography settings here
	},
	dark: {
		palette: {
			mode: 'dark',
			primary: { main: '#6573c3' },
			secondary: { main: '#ff4081' },
			card: { border: '#424242' },
			gray: { 1: '#bdbdbd', 2: '#424242' },
			background: {
				default: '#000',
				paper: `linear-gradient(#0f0c15, ${alpha('#0f0c15', 0.1)})`,
				main: '#141319',
				purpleGradient: `linear-gradient(60deg, ${alpha('#8711c1', 0.5)} 0%, ${alpha(
					'#2472fc',
					0.2
				)} 100% )`,
			},
		},
		// components: {
		// 	MuiPaper: {
		// 		styleOverrides: {
		// 			root: {
		// 				backgroundImage: `linear-gradient(-5deg,#14131a, ${alpha('#00', 0.2)})`,
		// 			},
		// 		},
		// 	},
		// },
		typography: darkModeTypography, // Apply the typography settings here
	},
};

export default themeSettings;
