import { useEffect, useState } from 'react';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
import { CircularProgress, Stack } from '@mui/material';
import { LineChart } from '../../../../../components/Charts/LineChart';
import axios from 'axios';
import ErrorIcon from '@mui/icons-material/Error';

const IncomeChart = () => {
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
			const endDate = '2024-01-01'; // example end date

			try {
				const response = await axios.get(
					`/incomeByDay?startDate=${startDate}&endDate=${endDate}`,
					{
						headers: addJwtHeader(),
					}
				);
				// Extract labels (months) and data (income) from the response
				const labels = response.data.incomeByDay.map((item) => item.date);
				const income = response.data.incomeByDay.map((item) => item.totalIncome);
				setChartData({ labels, income });
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
				<LineChart chartType={'Income'} data={chartData.income} labels={chartData.labels} />
			)}
		</>
	);
};

export default IncomeChart;
