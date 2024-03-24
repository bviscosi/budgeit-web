import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import WalletIcon from '@mui/icons-material/Wallet';
import ListIcon from '@mui/icons-material/List';
import { Paper, Stack, IconButton, styled, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { sidebar, sidebarItem } from './styles';
import Logo from './components/Logo/Logo';

const Sidebar = ({ tab, setTab }) => {
	const handleSetTab = (tab) => {
		setTab(tab);
	};

	return (
		<Box sx={sidebar}>
			<Logo />
			<Stack direction={'column'} gap={7}>
				<IconButton
					sx={`
						color: tab === 'home' ? '#ffffff' : '#858585',
						
							backgroundColor: tab === 'home' ? '#272727' : 'transparent', ${sidebarItem}
						`}
					onClick={() => handleSetTab('home')}>
					<GridViewIcon />
				</IconButton>
				<IconButton
					sx={{
						color: tab === 'transactions' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('transactions')}>
					<ListIcon
						sx={`
							backgroundColor: tab === 'transactions' ? '#272727' : 'transparent', ${sidebarItem}
						`}
					/>
				</IconButton>
				<IconButton
					sx={{
						color: tab === 'savings' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('savings')}>
					<SavingsIcon
						sx={`
							backgroundColor: tab === 'savings' ? '#272727' : 'transparent', ${sidebarItem}
						`}
					/>
				</IconButton>
				<IconButton
					sx={{
						color: tab === 'wallet' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('wallet')}>
					<WalletIcon
						sx={`
							backgroundColor: tab === 'wallet' ? '#272727' : 'transparent', ${sidebarItem}
						`}
					/>
				</IconButton>
				<IconButton
					sx={{
						color: tab === 'account' ? '#ffffff' : '#858585',
					}}
					onClick={() => handleSetTab('account')}>
					<PersonIcon
						sx={`
							backgroundColor: tab === 'account' ? '#272727' : 'transparent', ${sidebarItem}
						`}
					/>
				</IconButton>
			</Stack>

			<IconButton
				sx={{
					color: tab === 'settings' ? '#ffffff' : '#858585',
				}}
				onClick={() => {
					handleSetTab('settings');
				}}>
				<SettingsIcon
					sx={`
							backgroundColor: tab === 'settings' ? '#272727' : 'transparent', ${sidebarItem}
						`}
				/>
			</IconButton>
		</Box>
	);
};

export default Sidebar;
