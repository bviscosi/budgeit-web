import { Typography } from '@mui/material';
import React from 'react';
import ThemeModeToggle from './ThemeModeToggle/ThemeModeToggle';
import UserDropdownMenu from './UserDropdownMenu/UserDropdownMenu';

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
					<Typography variant='p' fontWeight='bold' color='#6475cc'>
						Welcome back, Ben 👋
					</Typography>
					<Typography
						variant='h3'
						fontWeight='bold'
						style={
							{
								// marginLeft: '2rem',
								// fontSize: '2.5rem',
								// color: theme.palette.primary.main,
							}
						}>
						Dashboard
					</Typography>
				</div>
				<div className='row'>
					<ThemeModeToggle />
					<UserDropdownMenu handleLogout={handleLogout} />
				</div>
			</div>
			{/* <hr /> */}
		</div>
	);
};

export default Topbar;
