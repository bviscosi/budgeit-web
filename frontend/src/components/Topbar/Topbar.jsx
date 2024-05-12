import { Stack, Typography } from '@mui/material';
import UserDropdownMenu from './UserDropdownMenu/UserDropdownMenu';
import { topbar } from './styles';
import ThemeModeToggle from '../ThemeModeToggle/ThemeModeToggle';

const Topbar = ({ tab, handleLogout }) => {
	return (
		<Stack direction='row' style={topbar}>
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
					{tab === 'budgets' && 'Budgets'}
					{tab === 'settings' && 'Settings'}
				</Typography>
			</div>
			<Stack direction='row'>
				<ThemeModeToggle />
				{/* <UserDropdownMenu handleLogout={handleLogout} /> */}
			</Stack>
		</Stack>
	);
};

export default Topbar;
