const getTypography = (mode) => ({
	caption2: {
		fontSize: '0.65rem',
		fontWeight: 400,
		color: mode === 'light' ? '#616161' : '#9e9ab0', // Slightly darker than h6 for less emphasis
	},
	caption: {
		fontSize: '0.8rem',
		fontWeight: 400,
		color: mode === 'light' ? '#757575' : '#a8a4b8', // Close to h6, for subtle distinction
	},
	body2: {
		fontSize: '0.95rem',
		fontWeight: 400,
		color: mode === 'light' ? '#9e9e9e' : '#b1adc1', // Transitioning from h6 towards h2
	},
	body1: {
		fontSize: '1.15rem',
		fontWeight: 400,
		lineHeight: 1.2,
		color: mode === 'light' ? '#bdbdbd' : '#c4c0ca', // Nearing the h2 color, for main text body
	},
	h6: {
		fontSize: '1.25rem',
		fontWeight: 400,
		lineHeight: 1.2,
		color: mode === 'light' ? '#e0e0e0' : '#aba6bf', // Your specified h6 color for dark mode
	},
	h5: {
		fontSize: '1.35rem',
		fontWeight: 400,
		lineHeight: 1.2,
		color: mode === 'light' ? '#ececec' : '#bcb8c2', // Bridging h6 to h2
	},
	h4: {
		fontSize: '1.75rem',
		fontWeight: 500,
		lineHeight: 1.2,
		color: mode === 'light' ? '#f5f5f5' : '#ccc8d1', // Getting closer to h2 color
	},
	h3: {
		fontSize: '2.2rem',
		fontWeight: 500,
		lineHeight: 1.2,
		color: mode === 'light' ? '#fafafa' : '#d6d3da', // Almost at h2 color
	},
	h2: {
		fontSize: '3rem',
		fontWeight: 500,
		lineHeight: 1.2,
		color: mode === 'light' ? '#fcfcfc' : '#dedde1', // Your specified h2 color for dark mode
	},
	h1: {
		fontSize: '4rem',
		fontWeight: 700,
		lineHeight: 1.2,
		color: mode === 'light' ? '#fdfdfd' : '#dedde1', // Closest to white for highest emphasis in dark mode
	},
});

export default getTypography;
