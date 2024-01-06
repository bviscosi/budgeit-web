import React from 'react';
import './Error.css'; // Assuming you will create a separate CSS file

const Error = () => {
	return (
		<div className='error-container'>
			<div className='error-icon'>⚠️</div> {/* Unicode Warning Sign */}
			<div className='error-message'>An error occurred. Please try again later.</div>
		</div>
	);
};

export default Error;
