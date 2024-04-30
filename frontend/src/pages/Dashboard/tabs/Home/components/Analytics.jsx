import { useRef, useEffect, useState } from 'react';
import { Card, Stack } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
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
				pointRadius: 0,
				borderJoinStyle: 'round',
				fill: {
					target: 'origin', // Set the fill options
				},
				showLabelBackdrop: 'true',
				data,
				// backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
				border: {
					dash: [15, 10],
					display: false,
				},
				grid: {
					drawBorder: true,
					drawTicks: false,
					color: '#272727',
				},
			},
			x: {
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
				<PrettyLineChart data={chartData.expenses} labels={chartData.labels} />
			</Stack>
		</Card>
	);
};

export default Analytics;
