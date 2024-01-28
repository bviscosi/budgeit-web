import React, { useState } from 'react';
import b_logo from '../../../../assets/b.png';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import WalletIcon from '@mui/icons-material/Wallet';
import { Button, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { sidebar } from './styles';

const Sidebar = ({ tab, setTab }) => {
	const handleSetTab = (tab) => {
		setTab(tab);
	};

	return (
		<Paper sx={sidebar}>
			<img
				src={b_logo}
				alt=''
				style={{
					width: '50px',
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
						color: tab === 'dashboard' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('dashboard')}>
					<GridViewIcon
						sx={{
							padding: '0.5rem',
							display: 'flex',
							backgroundColor: tab === 'dashboard' ? '#272727' : 'transparent',
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
						// width: '3rem',
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
