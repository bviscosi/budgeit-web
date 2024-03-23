import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Box } from '@mui/material';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import { body, home } from './styles';
import { useCustomTheme } from '../../utils/theme/ThemeContext';
import Home from './tabs/Home/Home';
import Transactions from './tabs/Transactions/Transactions';

const Dashboard = ({ handleLogout }) => {
	const { theme } = useCustomTheme(); // Accessing the theme

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
				setTransactions(response.data);
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
				<div style={home}>
					<Sidebar tab={tab} setTab={setTab} />
					<div style={body}>
						<Topbar tab={tab} handleLogout={handleLogout}></Topbar>
						{tab === 'home' && <Home />}
						{tab === 'transactions' && <Transactions transactions={transactions} />}
					</div>
				</div>
			)}
		</Box>
	);
};

export default Dashboard;
