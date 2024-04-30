import getTypography from './typography';

// Correct the function calls by removing the extra parenthesis
const lightModeTypography = getTypography('light');
const darkModeTypography = getTypography('dark');
import { alpha } from '@mui/material';

// Assuming console.log(lightModeTypography) is just for debugging and can be removed or commented out
// console.log(lightModeTypography);

export const brand = {
	50: '#E5EAF7',
	100: '#D6DDF2',
	200: '#B7C3E8',
	300: '#98AADE',
	400: '#7990D4',
	500: '#5A77CA',
	600: '#3959B3',
	700: '#2C4488',
	800: '#1E2F5E',
	900: '#101933',
	950: '#0A0F1E',
};

export const secondary = {
	50: '#F9F0FF',
	100: '#E9CEFD',
	200: '#D49CFC',
	300: '#B355F6',
	400: '#750AC2',
	500: '#6709AA',
	600: '#490679',
	700: '#3B0363',
	800: '#2F024F',
	900: '#23023B',
};

export const gray = {
	50: '#FBFBFE',
	100: '#EAEAF4',
	200: '#D6D7EB',
	300: '#BFBFD9',
	400: '#9494B8',
	500: '#5A5B7C',
	600: '#4C4C66',
	700: '#363649',
	800: '#191920',
	900: '#070707',
};

export const green = {
	50: '#F6FEF6',
	100: '#E3FBE3',
	200: '#C7F7C7',
	300: '#A1E8A1',
	400: '#51BC51',
	500: '#1F7A1F',
	600: '#136C13',
	700: '#0A470A',
	800: '#191920',
	900: '#021D02',
};

const themeSettings1 = {
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
		components: {
			MuiCard: {
				styleOverrides: {
					root: ({ ownerState }) => ({
						borderRadius: 10,
						border: `1px solid ${alpha(gray[200], 0.8)}`,
						boxShadow: 'none',
						transition: 'background-color, border, 80ms ease',
						...(ownerState.variant === 'outlined' && {
							background: 'linear-gradient(#25242a, #131316)',
							'&:hover': {
								borderColor: brand[300],
								boxShadow: `0 0 24px ${brand[100]}`,
							},
						}),
						...{
							border: `1px solid ${alpha(gray[300], 0.3)}`,
							...(ownerState.variant === 'outlined' && {
								background: `linear-gradient(to bottom, #070707, #070707)`,
								'&:hover': {
									borderColor: brand[700],
									boxShadow: `0 0 24px ${brand[900]}`,
								},
							}),
						},
					}),
				},
			},
		},
		typography: lightModeTypography, // Apply the typography settings here
	},
	dark: {
		palette: {
			mode: 'dark',
			primary: { main: '#6475cc' },
			secondary: { main: '#ff4081' },
			card: { border: '#424242' },
			gray: { 1: '#bdbdbd', 2: '#424242' },
			action: {
				selected: `#030303`,
			},
			background: {
				default: '#000',
				paper: `linear-gradient(#0f0c15, ${alpha('#0f0c15', 0.1)})`,
				main: '#141319',
				purpleGradient: `linear-gradient(60deg, ${alpha('#484592', 0.4)} 0%, ${alpha(
					'#0f0c15',
					0.9
				)} 100% )`,
			},
		},
		components: {
			MuiAccordion: {
				defaultProps: {
					elevation: 0,
					disableGutters: true,
				},
				styleOverrides: {
					root: ({ theme }) => ({
						padding: 8,
						overflow: 'clip',
						// backgroundColor: '#fff',
						border: '1px solid',
						borderColor: gray[100],
						':before': {
							// backgroundColor: 'transparent',
						},
						'&:first-of-type': {
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
						},
						'&:last-of-type': {
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10,
						},
						...(theme.palette.mode === 'dark' && {
							backgroundColor: gray[900],
							borderColor: gray[800],
						}),
					}),
				},
			},
			MuiAccordionSummary: {
				styleOverrides: {
					root: ({ theme }) => ({
						border: 'none',
						borderRadius: 8,
						'&:hover': { backgroundColor: gray[100] },
						...(theme.palette.mode === 'dark' && {
							'&:hover': { backgroundColor: `${alpha(gray[800], 0.3)}` },
						}),
					}),
				},
			},
			MuiAccordionDetails: {
				styleOverrides: {
					root: { mb: 20, border: 'none' },
				},
			},

			MuiCard: {
				styleOverrides: {
					root: ({ ownerState }) => ({
						// backgroundColor: gray[50],
						borderRadius: 10,
						border: `1px solid ${alpha(gray[200], 0.8)}`,
						boxShadow: 'none',
						transition: 'background-color, border, 80ms ease',
						...(ownerState.variant === 'outlined' && {
							background: 'linear-gradient(#25242a, #131316)',
							'&:hover': {
								borderColor: brand[300],
								boxShadow: `0 0 24px ${brand[100]}`,
							},
						}),
						...{
							border: `1px solid ${alpha(gray[700], 0.3)}`,
							...(ownerState.variant === 'outlined' && {
								background: `linear-gradient(to bottom, #070707, #070707)`,
								'&:hover': {
									borderColor: brand[700],
									boxShadow: `0 0 24px ${brand[900]}`,
								},
							}),
						},
					}),
				},
			},
		},

		typography: darkModeTypography, // Apply the typography settings here
	},
};

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
			primary: { main: '#6475cc' },
			secondary: { main: '#ff4081' },
			card: { border: '#424242' },
			gray: { 1: '#bdbdbd', 2: '#424242' },
			action: {
				selected: `#030303`,
			},
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
		components: {
			MuiAccordion: {
				defaultProps: {
					elevation: 0,
					disableGutters: true,
				},
				styleOverrides: {
					root: ({ theme }) => ({
						padding: 8,
						overflow: 'clip',
						backgroundColor: '#fff',
						border: '1px solid',
						borderColor: gray[100],
						':before': {
							backgroundColor: 'transparent',
						},
						'&:first-of-type': {
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
						},
						'&:last-of-type': {
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10,
						},
						...(theme.palette.mode === 'dark' && {
							backgroundColor: gray[900],
							borderColor: gray[800],
						}),
					}),
				},
			},
			MuiAccordionSummary: {
				styleOverrides: {
					root: ({ theme }) => ({
						border: 'none',
						borderRadius: 8,
						'&:hover': { backgroundColor: gray[100] },
						...(theme.palette.mode === 'dark' && {
							'&:hover': { backgroundColor: gray[800] },
						}),
					}),
				},
			},
			MuiAccordionDetails: {
				styleOverrides: {
					root: { mb: 20, border: 'none' },
				},
			},

			MuiCard: {
				styleOverrides: {
					root: ({ theme, ownerState }) => ({
						// backgroundColor: gray[50],
						borderRadius: 10,
						border: `1px solid ${alpha(gray[200], 0.8)}`,
						boxShadow: 'none',
						transition: 'background-color, border, 80ms ease',
						...(ownerState.variant === 'outlined' && {
							background: `linear-gradient(to bottom, #FFF, ${gray[50]})`,
							'&:hover': {
								borderColor: brand[300],
								boxShadow: `0 0 24px ${brand[100]}`,
							},
						}),
						...(theme.palette.mode === 'dark' && {
							// backgroundColor: alpha(gray[800], 0.6),
							border: `1px solid ${alpha(gray[700], 0.3)}`,
							...(ownerState.variant === 'outlined' && {
								background: `linear-gradient(to bottom, ${gray[900]}, ${alpha(
									gray[800],
									0.1
								)})`,
								'&:hover': {
									borderColor: brand[700],
									boxShadow: `0 0 24px ${brand[800]}`,
								},
							}),
						}),
					}),
				},
			},

			MuiLink: {
				defaultProps: {
					underline: 'none',
				},
				styleOverrides: {
					root: ({ theme }) => ({
						color: brand[600],
						fontWeight: 500,
						position: 'relative',
						textDecoration: 'none',
						'&::before': {
							content: '""',
							position: 'absolute',
							width: 0,
							height: '1px',
							bottom: 0,
							left: 0,
							backgroundColor: brand[200],
							opacity: 0.7,
							transition: 'width 0.3s ease, opacity 0.3s ease',
						},
						'&:hover::before': {
							width: '100%',
							opacity: 1,
						},
						...(theme.palette.mode === 'dark' && {
							color: brand[200],
						}),
					}),
				},
			},
			MuiMenuItem: {
				styleOverrides: {
					root: ({ theme }) => ({
						borderRadius: '99px',
						color: gray[500],
						fontWeight: 500,
						...(theme.palette.mode === 'dark' && {
							color: gray[300],
						}),
					}),
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: ({ theme }) => ({
						backgroundImage: 'none',
						backgroundColor: gray[100],
						...(theme.palette.mode === 'dark' && {
							backgroundColor: alpha(gray[900], 0.6),
						}),
					}),
				},
			},
		},

		typography: darkModeTypography, // Apply the typography settings here
	},
};

export default themeSettings1;
