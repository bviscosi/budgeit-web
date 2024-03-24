import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Box, Stack } from '@mui/material';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import Home from './tabs/Home/Home';
import Transactions from './tabs/Transactions/Transactions';

const Dashboard = ({ handleLogout }) => {
	const [tab, setTab] = useState('home');
	// Function to add JWT to Axios request headers
	const addJwtHeader = () => {
		const token = localStorage.getItem('token');
		return token ? { Authorization: `Bearer ${token}` } : {};
	};

	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchTransactions = async (startDate, endDate) => {
			setLoading(true);
			setError('');
			try {
				const response = await axios.get(
					`/transactions?startDate=${startDate}&endDate=${endDate}`,
					{ headers: addJwtHeader() }
				);
				setTransactions(response.data.transactions);
				// console.log(response.data);
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		// Example dates, replace with actual dynamic dates
		const startDate = '2023-11-01';
		const endDate = '2024-01-01';
		fetchTransactions(startDate, endDate);
	}, []);

	return (
		<Box sx={{ backgroundColor: 'background.main', height: '100vh' }}>
			{loading && <Loading />}
			{error && <Error />}
			{!error && !loading && (
				<Stack direction={'row'} justifyContent={'space-between'}>
					<Sidebar tab={tab} setTab={setTab} />
					<Stack direction={'column'} width='100%' ml={'4rem'}>
						<Topbar tab={tab} handleLogout={handleLogout}></Topbar>
						{tab === 'home' && <Home transactions={transactions} />}
						{tab === 'transactions' && <Transactions transactions={transactions} />}
					</Stack>
				</Stack>
			)}
		</Box>
	);
};

export default Dashboard;
