import { Typography } from '@mui/material';
import React from 'react';
import ThemeModeToggle from './ThemeModeToggle/ThemeModeToggle';
import UserDropdown from './UserDropdown/UserDropdown';

const Topbar = ({ handleLogout }) => {
	return (
		<div>
			<div
				className='topbar'
				style={{
					marginRight: '1rem',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '1rem',
				}}>
				<div
					style={{
						marginLeft: '2rem',
					}}>
					<Typography fontSize='24px' fontWeight='bold' color='#6475cc'>
						Welcome back, Ben 👋
					</Typography>
					<Typography
						variant='h1'
						fontWeight='bold'
						style={{
							// marginLeft: '2rem',
							fontSize: '2.5rem',
							// color: theme.palette.primary.main,
						}}>
						Dashboard
					</Typography>
				</div>
				<div className='row'>
					<ThemeModeToggle />
					<UserDropdown handleLogout={handleLogout} />
				</div>
			</div>
			{/* <hr /> */}
		</div>
	);
};

export default Topbar;
