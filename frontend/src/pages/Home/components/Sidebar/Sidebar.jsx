import React, { useState } from 'react';
import b_logo from '../../../../assets/b.png';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WalletIcon from '@mui/icons-material/Wallet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Button, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Person from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { sidebar } from './styles';

const Sidebar = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState('settings');

	const handleSetActive = (page) => {
		setActive(page);
		// navigate('/' + page);
	};

	return (
		<Paper sx={sidebar}>
			<img
				src={b_logo}
				alt=''
				style={{
					width: '70px',
				}}
			/>
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
						color: active === 'dashboard' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetActive('dashboard')}>
					<GridViewIcon
						sx={{
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: active === 'dashboard' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: active === 'savings' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetActive('savings')}>
					<SavingsIcon
						sx={{
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: active === 'savings' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: active === 'wallet' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetActive('wallet')}>
					<WalletIcon
						sx={{
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: active === 'wallet' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: active === 'account' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetActive('account')}>
					<PersonIcon
						sx={{
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: active === 'account' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
			</div>

			<Button
				sx={{
					color: active === 'settings' ? '#ffffff' : '#858585',
				}}
				onClick={() => {
					handleSetActive('settings');
				}}>
				<SettingsIcon
					sx={{
						// width: '3rem',
						padding: '0.5rem',
						display: 'flex',
						backgroundColor: active === 'settings' ? '#272727' : 'transparent',
						borderRadius: '100%',
					}}
				/>
			</Button>
		</Paper>
	);
};

export default Sidebar;
