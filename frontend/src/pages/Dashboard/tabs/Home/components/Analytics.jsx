import { useRef, useEffect, useState } from 'react';
import { Card, Stack, styled } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PrettyLineChart = ({ expenses, income, labels }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const chart = chartRef.current;

		if (chart) {
			const ctx = chart.ctx;
			const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
			gradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)'); // Start color
			gradient.addColorStop(1, 'rgba(255, 159, 64, 0)'); // End color, transparent

			const dataset = chart.data.datasets[0];
			dataset.backgroundColor = gradient; // Apply gradient here
			dataset.fill = 'start'; // Ensure area under line is filled

			chart.update();
		}
	}, []);

	const chartData = {
		labels,
		datasets: [
			{
				label: 'Expenses',
				expenses,
				pointRadius: 0,
				borderColor: 'rgba(255, 99, 132, 1)',
			},
			{
				label: 'Income',
				income,
				pointRadius: 0,
				borderColor: 'rgba(255, 99, 132, 1)',
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				labels: {
					font: {
						size: 20,
					},
				},
			},
		},
	};

	return (
		<div style={{ height: '400px', width: '100%' }}>
			<Line ref={chartRef} data={chartData} options={options} />
		</div>
	);
};

const Analytics = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	// Initialize state to hold chart data
	const [chartData, setChartData] = useState({
		labels: [],
		expenses: [],
		income: [],
	});

	useEffect(() => {
		const fetchTransactions = async () => {
			setLoading(true);
			setError('');

			const startDate = '2023-11-01'; // example start date
			const endDate = '2024-01-01'; // example end date

			try {
				const response = await axios.get(
					`/expensesByDay?startDate=${startDate}&endDate=${endDate}`,
					{
						headers: addJwtHeader(),
					}
				);
				// Extract labels (months) and data (spending) from the response
				const labels = response.data.expensesByDay.map((item) => item.date);
				const expenses = response.data.expensesByDay.map((item) => item.totalSpending);
				setChartData({ labels, expenses, expenses });
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		fetchTransactions();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<Card
			sx={{
				height: '100%',
				padding: '1rem',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
			}}>
			<Stack
				sx={{
					height: '30rem',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '1rem',
				}}>
				{/* Pass the processed data and labels to the PrettyLineChart component */}
				<PrettyLineChart data={chartData.data} labels={chartData.labels} />
			</Stack>
		</Card>
	);
};

export default Analytics;
