import { useRef, useEffect } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GradientBorderWrapper = styled('div')(() => ({
	height: '100%',
	position: 'relative',
	padding: '2px', // Adjusts the border thickness
	background:
		'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)',
	borderRadius: '1rem', // Match your Card's borderRadius
	'&:before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 'inherit',
		padding: '1rem', // Adjusts the space for the border inside the wrapper
		background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
		zIndex: -1,
	},
}));

// Example labels representing months
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Example dataset representing some metric (e.g., sales, users) over these months
const data = [120, 190, 300, 500, 200, 300, 450];
const PrettyLineChart = ({ data, labels }) => {
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
				label: 'Spending',
				// fill: true,
				lineTension: 0.3,
				borderWidth: 2,
				data,
				// pointRadius: 4,
				// pointHoverRadius: 6,
				borderColor: 'rgba(255, 99, 132, 1)',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
	return (
		<Card
			sx={{
				height: '100%',
				padding: '1rem',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
				// background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
			}}>
			<Stack
				sx={{
					height: '30rem',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '1rem',
				}}>
				<PrettyLineChart data={data} labels={labels} />
			</Stack>
		</Card>
	);
};

export default Analytics;
