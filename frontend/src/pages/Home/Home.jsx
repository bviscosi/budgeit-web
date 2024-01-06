import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import axios from 'axios';

const Home = ({ handleLogout }) => {
	const theme = useTheme(); // Accessing the theme

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
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		// Example dates, replace with actual dynamic dates
		const startDate = '2022-01-01';
		const endDate = '2022-01-31';
		fetchTransactions(startDate, endDate);
	}, []);

	return (
		<Box className='page' sx={{ backgroundColor: theme.palette.background.main }}>
			{loading && <p>Loading transactions...</p>}
			{error && <p>Error: {error}</p>}
			{!error && !loading && (
				<div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
					<Sidebar handleLogout={handleLogout} />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
							height: '100%',
						}}>
						<Topbar></Topbar>

						<Grid
							container
							spacing={{ xs: 2, sm: 2, md: 3 }}
							sx={{
								height: '100%',
								width: '100%',
								padding: '2rem',
							}}>
							<Grid item xs={6} md={6}>
								<Paper
									style={{
										display: 'flex',
										height: '100%',
										width: '100%',
										// border: `1px solid ${theme.palette.card.border}`,
										boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

										// backgroundColor: '#f7f8fa',
										borderRadius: '20px',
									}}>
									<Typography
										variant='h3'
										fontSize='24px'
										fontWeight='bold'
										padding='1rem'>
										Overview
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={6} md={6}>
								<Paper
									style={{
										display: 'flex',
										height: '100%',
										width: '100%',
										// border: `1px solid ${theme.palette.card.border}`,
										boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

										// backgroundColor: '#f7f8fa',
										borderRadius: '20px',
									}}>
									<Typography
										variant='h3'
										fontSize='24px'
										fontWeight='bold'
										padding='1rem'>
										Budgets
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={6} md={6}>
								<Paper
									style={{
										display: 'flex',
										height: '100%',
										width: '100%',
										// padding: '10px',
										// border: `1px solid ${theme.palette.card.border}`,
										boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

										// backgroundColor: '#f7f8fa',
										borderRadius: '20px',
									}}>
									<Typography
										variant='h3'
										fontSize='24px'
										fontWeight='bold'
										padding='1rem'>
										Accounts
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={6} md={6}>
								<Paper
									style={{
										display: 'flex',
										height: '100%',
										width: '100%',
										// border: `1px solid ${theme.palette.card.border}`,
										boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

										// backgroundColor: '#f7f8fa',
										borderRadius: '20px',
									}}></Paper>
							</Grid>
						</Grid>
					</div>
				</div>
			)}
		</Box>
	);
};

export default Home;
