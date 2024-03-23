import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import WalletIcon from '@mui/icons-material/Wallet';
import ListIcon from '@mui/icons-material/List';
import { Button, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { main, sidebar } from './styles';
import Logo from './components/Logo/Logo';

const Sidebar = ({ tab, setTab }) => {
	const handleSetTab = (tab) => {
		setTab(tab);
	};

	return (
		<Paper sx={sidebar}>
			<Logo />
			<div style={main}>
				<Button
					sx={{
						color: tab === 'home' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('home')}>
					<GridViewIcon
						sx={{
							fontSize: 40,
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: tab === 'home' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: tab === 'transactions' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('transactions')}>
					<ListIcon
						sx={{
							fontSize: 40,
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: tab === 'transactions' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: tab === 'savings' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('savings')}>
					<SavingsIcon
						sx={{
							fontSize: 40,
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: tab === 'savings' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: tab === 'wallet' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('wallet')}>
					<WalletIcon
						sx={{
							fontSize: 40,
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: tab === 'wallet' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
				<Button
					sx={{
						color: tab === 'account' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('account')}>
					<PersonIcon
						sx={{
							fontSize: 40,
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: tab === 'account' ? '#272727' : 'transparent',
							borderRadius: '100%',
						}}
					/>
				</Button>
			</div>

			<Button
				sx={{
					color: tab === 'settings' ? '#ffffff' : '#858585',
				}}
				onClick={() => {
					handleSetTab('settings');
				}}>
				<SettingsIcon
					sx={{
						fontSize: 40,
						padding: '0.5rem',
						display: 'flex',
						backgroundColor: tab === 'settings' ? '#272727' : 'transparent',
						borderRadius: '100%',
					}}
				/>
			</Button>
		</Paper>
	);
};

export default Sidebar;
