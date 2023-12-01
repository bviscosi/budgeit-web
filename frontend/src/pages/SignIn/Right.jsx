import React from 'react';

const Right = () => {
	return (
		<div
			sx={{
				display: 'flex',
				width: '50vw',
				height: '100vh',
				justifyContent: 'center',
			}}>
			<div className='sign-in-right'>
				<div style={{ width: '50%' }}>
					<h1 style={{ fontSize: '3rem', color: '#e6e8ec' }}>Welcome Back</h1>
					<h3 style={{ fontSize: '1.5rem', color: '#e6e8ec' }}>
						Please login to access your account
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Right;
