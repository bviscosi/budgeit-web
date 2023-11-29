import React, { useState } from 'react';
import b_logo from '../../../../assets/b.png';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WalletIcon from '@mui/icons-material/Wallet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Person from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState('settings');

	const handleSetActive = (page) => {
		setActive(page);
		// navigate('/' + page);
	};

	return (
		<div className='sidebar'>
			<img
				src={b_logo}
				alt=''
				style={{
					width: '70px',
				}}></img>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					gap: '7vh',
					justifyContent: 'center',
				}}>
				<Button
					sx={{
						color: '#d8dee8',
						backgroundColor: active === 'dashboard' ? '#14141f' : 'transparent',
						'&:hover': {
							backgroundColor: active === 'dashboard' ? '#14141f' : 'transparent',
						},
					}}
					onClick={() => handleSetActive('dashboard')}>
					<GridViewIcon />
				</Button>
				<Button
					sx={{
						color: '#d8dee8',
						backgroundColor: active === 'savings' ? '#14141f' : 'transparent',
						'&:hover': {
							backgroundColor: active === 'savings' ? '#14141f' : 'transparent',
						},
					}}
					onClick={() => handleSetActive('savings')}>
					<SavingsIcon />
				</Button>
				<Button
					sx={{
						color: '#d8dee8',
						backgroundColor: active === 'wallet' ? '#14141f' : 'transparent',
						'&:hover': {
							backgroundColor: active === 'wallet' ? '#14141f' : 'transparent',
						},
					}}
					onClick={() => handleSetActive('wallet')}>
					<WalletIcon />
				</Button>
				<Button
					sx={{
						color: '#d8dee8',
						backgroundColor: active === 'account' ? '#14141f' : 'transparent',
						'&:hover': {
							backgroundColor: active === 'account' ? '#14141f' : 'transparent',
						},
					}}
					onClick={() => handleSetActive('account')}>
					<PersonIcon />
				</Button>
			</div>

			<Button
				sx={{
					color: '#d8dee8',
					backgroundColor: active === 'settings' ? '#14141f' : 'transparent',
					'&:hover': {
						backgroundColor: active === 'settings' ? '#14141f' : 'transparent',
					},
				}}
				onClick={() => handleSetActive('settings')}>
				<SettingsIcon />
			</Button>
		</div>
	);
};

export default Sidebar;
