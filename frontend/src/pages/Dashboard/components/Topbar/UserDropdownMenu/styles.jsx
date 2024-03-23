export const profileCircle = {
	width: '1.5rem',
	// height: '1.5rem',
	borderRadius: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	marginRight: '1rem',
	color: '#e5e9f0',
	boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
	// backgroundColor: '#F7F8FA',
};

export const button = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-evenly', // This will ensure spacing around the name and icon
	border: '1px solid #474747',
	borderRadius: '30px',
	boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
	textTransform: 'none',
	padding: '0 1rem 0 1rem',
	width: '200px', // Specify the width to match the menu width
	'&:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.08)',
	},
};

export const menuItem = {
	color: 'white',
	'&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
};
