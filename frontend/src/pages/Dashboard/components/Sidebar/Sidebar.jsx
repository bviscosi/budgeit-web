import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import WalletIcon from '@mui/icons-material/Wallet';
import ListIcon from '@mui/icons-material/List';
import { Stack, IconButton, Box } from '@mui/material';
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
					sx={{
						...sidebarItem,
						color: tab === 'home' ? '#ffffff' : '#858585',
						backgroundColor: tab === 'home' ? '#272727' : 'transparent',
					}}
					onClick={() => handleSetTab('home')}>
					<GridViewIcon />
				</IconButton>
				<IconButton
					sx={{
						...sidebarItem,
						color: tab === 'transactions' ? '#ffffff' : '#858585',
						backgroundColor: tab === 'transactions' ? '#272727' : 'transparent',
					}}
					onClick={() => handleSetTab('transactions')}>
					<ListIcon />
				</IconButton>
				<IconButton
					sx={{
						...sidebarItem,
						color: tab === 'savings' ? '#ffffff' : '#858585',
						backgroundColor: tab === 'savings' ? '#272727' : 'transparent',
					}}
					onClick={() => handleSetTab('savings')}>
					<SavingsIcon />
				</IconButton>
				<IconButton
					sx={{
						...sidebarItem,
						color: tab === 'wallet' ? '#ffffff' : '#858585',
						backgroundColor: tab === 'wallet' ? '#272727' : 'transparent',
					}}
					onClick={() => handleSetTab('wallet')}>
					<WalletIcon />
				</IconButton>
				<IconButton
					sx={{
						...sidebarItem,
						color: tab === 'account' ? '#ffffff' : '#858585',
						backgroundColor: tab === 'account' ? '#272727' : 'transparent',
					}}
					onClick={() => handleSetTab('account')}>
					<PersonIcon />
				</IconButton>
			</Stack>

			<IconButton
				sx={{
					...sidebarItem,
					color: tab === 'settings' ? '#ffffff' : '#858585',
					backgroundColor: tab === 'settings' ? '#272727' : 'transparent',
				}}
				onClick={() => {
					handleSetTab('settings');
				}}>
				<SettingsIcon />
			</IconButton>
		</Box>
	);
};

export default Sidebar;
