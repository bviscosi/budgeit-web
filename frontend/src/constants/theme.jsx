import typography from './typography';

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
		typography,
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
				paper: '#14131a',
				main: '#141319',
				// purpleGradient: 'linear-gradient(#242acf, #b57bee)',
				purpleGradient:
					'linear-gradient(60deg, rgba(2,10,18,1) 0%, rgba(82,50,135,1) 70%, rgba(0,90,116,0.8) 100%)',
			},
		},
		typography,
	},
};

export default themeSettings;
