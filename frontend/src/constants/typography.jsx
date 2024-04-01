const getTypography = (mode) => ({
	caption2: {
		fontSize: '0.65rem',
		fontWeight: 400,
		color: mode === 'light' ? '#616161' : '#c7c7c7', // Subtle grey to lighter in dark mode
	},
	caption: {
		fontSize: '0.8rem',
		fontWeight: 400,
		color: mode === 'light' ? '#757575' : '#d0d0d0',
	},
	body2: {
		fontSize: '0.95rem',
		fontWeight: 400,
		color: mode === 'light' ? '#9e9e9e' : '#dadada',
	},
	body1: {
		fontSize: '1.15rem',
		fontWeight: 400,
		lineHeight: 1.2,
		color: mode === 'light' ? '#bdbdbd' : '#e4e4e4',
	},
	h6: {
		fontSize: '1.25rem',
		fontWeight: 400,
		lineHeight: 1.2,
		color: mode === 'light' ? '#e0e0e0' : '#eeeeee',
	},
	h5: {
		fontSize: '1.35rem',
		fontWeight: 400,
		lineHeight: 1.2,
		color: mode === 'light' ? '#ececec' : '#f5f5f5',
	},
	h4: {
		fontSize: '1.75rem',
		fontWeight: 500,
		lineHeight: 1.2,
		color: mode === 'light' ? '#f5f5f5' : '#fafafa',
	},
	h3: {
		fontSize: '2.2rem',
		fontWeight: 500,
		lineHeight: 1.2,
		color: mode === 'light' ? '#fafafa' : '#fcfcfc',
	},
	h2: {
		fontSize: '3rem',
		fontWeight: 500,
		lineHeight: 1.2,
		color: mode === 'light' ? '#fcfcfc' : '#fdfdfd',
	},
	h1: {
		fontSize: '4rem',
		fontWeight: 700,
		lineHeight: 1.2,
		color: mode === 'light' ? '#fdfdfd' : '#ffffff', // Closest to white for highest emphasis in dark mode
	},
});

export default getTypography;
