import { Typography } from '@mui/material';
import React from 'react';
import ThemeModeToggle from './ThemeModeToggle/ThemeModeToggle';
import UserDropdownMenu from './UserDropdownMenu/UserDropdownMenu';

const Topbar = ({ tab, handleLogout }) => {
	return (
		<div>
			<div
				className='topbar'
				style={{
					paddingRight: '1rem',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '1rem',
					border: '1px solid white',
					margin: 0,
				}}>
				<div
					style={
						{
							// marginLeft: '2rem',
						}
					}>
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
						{tab === 'home' && 'Dashboard'}
						{tab === 'transactions' && 'Transactions'}
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
