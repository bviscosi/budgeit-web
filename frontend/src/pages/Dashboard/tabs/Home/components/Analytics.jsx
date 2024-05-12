import { useRef, useEffect, useState } from 'react';
import { Card, CircularProgress, Stack, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const PrettyLineChart = ({ data, labels }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current && chartRef.current.ctx) {
			const ctx = chartRef.current.ctx;
			const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
			gradient.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
			gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');

			const chartInstance = chartRef.current;
			chartInstance.data.datasets.forEach((dataset) => {
				dataset.backgroundColor = gradient; // Apply gradient to background color
			});
			// chartInstance.update();
		}
	}, [data]);

	const chartData = {
		labels,
		datasets: [
			{
				label: 'Spending',
				tension: 0.1,
				pointRadius: 3,
				pointBackgroundColor: 'rgba(0,0,0,0)',
				borderJoinStyle: 'round',
				fill: {
					target: 'origin', // Set the fill options
				},
				showLabelBackdrop: 'true',
				data,
				borderColor: 'rgba(255, 99, 132, 1)',
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				ticks: {
					padding: 30, // Increase this value to push labels further out
					font: {
						size: 18, // Increase this value to enlarge the font size
					},
				},
				beginAtZero: true,
				border: {
					dash: [15, 10],
					display: false,
				},
				grid: {
					drawBorder: true,
					drawTicks: false,
					// color: '#272727',
					// color: '#e0e0e0',
				},
			},
			x: {
				ticks: {
					font: {
						size: 16, // Increase this value to enlarge the font size
					},
					padding: 20, // Increase this value to push labels further out
				},
				grid: {
					drawBorder: false, // Ensures no border lines are drawn at the edges of the x-axis
					drawOnChartArea: false, // This will remove the grid lines
				},
			},
		},
		plugins: {
			legend: {
				display: false, // This hides the legend
			},
		},
	};

	return (
		<div style={{ height: '100%', width: '100%', marginTop: '1rem' }}>
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
		<Card
			sx={{
				height: '100%',
				padding: 2,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
			}}>
			<Stack
				sx={{
					height: '30rem',
					alignItems: 'center',
					// justifyContent: 'space-between',
					borderRadius: '1rem',
				}}>
				<Typography
					variant='h4'
					alignSelf='flex-start'
					fontWeight='600'
					marginLeft={2}
					marginTop={2}
					color='text.primary'>
					Spending
				</Typography>
				{/* Pass the processed data and labels to the PrettyLineChart component */}
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
					<PrettyLineChart data={chartData.expenses} labels={chartData.labels} />
				)}
			</Stack>
		</Card>
	);
};

export default Analytics;
