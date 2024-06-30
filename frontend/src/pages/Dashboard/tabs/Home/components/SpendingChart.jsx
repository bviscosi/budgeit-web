import { useEffect, useState } from 'react';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
import axios from 'axios';
import { CircularProgress, Stack } from '@mui/material';
import { LineChart } from '../../../../../components/Charts/LineChart';
import ErrorIcon from '@mui/icons-material/Error';

const SpendingChart = () => {
	const [chartData, setChartData] = useState({
		labels: [],
		expenses: [],
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchTransactions = async () => {
			setLoading(true);
			setError('');

			const startDate = '2023-11-01'; // example start date
			const endDate = '2024-06-01'; // example end date

			try {
				const response = await axios.get(
					`/expensesByDay?startDate=${startDate}&endDate=${endDate}`,
					{
						headers: addJwtHeader(),
					}
				);

				console.log(response);
				// Extract labels (months) and data (spending) from the response
				const labels = response.data.expensesByDay.map((item) => item.date);
				const expenses = response.data.expensesByDay.map((item) => item.totalSpending);
				setChartData({ labels, expenses });
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		fetchTransactions();
	}, []);

	return (
		<>
			{loading ? (
				<div style={{ position: 'relative', top: '40%', left: 0 }}>
					<CircularProgress />
				</div>
			) : error ? (
				<Stack
					direction='column'
					alignItems='center'
					gap='1rem'
					sx={{ position: 'relative', top: '35%', left: 0 }}>
					<ErrorIcon color='error' fontSize='large' />
					{error}
				</Stack>
			) : (
				<LineChart chartType={'Spending'} data={chartData.expenses} labels={chartData.labels} />
			)}
		</>
	);
};

export default SpendingChart;
