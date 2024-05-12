import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import { Box, Stack } from '@mui/material';
import Home from './tabs/Home/Home';
import Settings from './tabs/Settings/Settings';
import Transactions from './tabs/Transactions/Transactions';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Budgets from './tabs/Budgets/Budgets';

const Dashboard = ({ handleLogout }) => {
	const [tab, setTab] = useState('home');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	return (
		<Box sx={{ backgroundColor: 'background.main', minHeight: '100vh' }}>
			{loading && <Loading />}
			{error && <Error />}
			{!error && !loading && (
				<Stack direction={'row'} justifyContent={'space-between'}>
					<Sidebar tab={tab} setTab={setTab} />
					<Stack direction={'column'} width='100%' ml={'4rem'}>
						<Topbar tab={tab} handleLogout={handleLogout}></Topbar>
						{tab === 'home' && <Home />}
						{tab === 'transactions' && <Transactions />}
						{tab === 'Budgets' && <Budgets />}
						{tab === 'settings' && <Settings />}
					</Stack>
				</Stack>
			)}
		</Box>
	);
};

export default Dashboard;
