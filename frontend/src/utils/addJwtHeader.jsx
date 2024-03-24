// Function to add JWT to Axios request headers
export const addJwtHeader = () => {
	const token = localStorage.getItem('token');
	return token ? { Authorization: `Bearer ${token}` } : {};
};
