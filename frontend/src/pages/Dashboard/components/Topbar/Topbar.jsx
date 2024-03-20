import { Typography } from '@mui/material';
import React from 'react';
import ThemeModeToggle from './ThemeModeToggle/ThemeModeToggle';
import UserDropdownMenu from './UserDropdownMenu/UserDropdownMenu';
import { topbar } from './styles';

const Topbar = ({ tab, handleLogout }) => {
	return (
		<div style={topbar}>
			<div
				style={{
					marginLeft: '2rem',
				}}>
				<Typography variant='p' fontWeight='bold' color='#6475cc'>
					Welcome back, Ben 👋
				</Typography>
				<Typography variant='h3' fontWeight='bold'>
					{tab === 'home' && 'Dashboard'}
					{tab === 'transactions' && 'Transactions'}
				</Typography>
			</div>
			<div className='row'>
				<ThemeModeToggle />
				<UserDropdownMenu handleLogout={handleLogout} />
			</div>
		</div>
	);
};

export default Topbar;
