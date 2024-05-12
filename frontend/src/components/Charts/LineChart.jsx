import { useEffect, useRef } from 'react';

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

export const LineChart = ({ chartType, data, labels }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current && chartRef.current.ctx) {
			const ctx = chartRef.current.ctx;
			const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
			gradient.addColorStop(
				0,
				chartType === 'Spending' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(100, 220, 132, 0.2)'
			);
			gradient.addColorStop(
				1,
				chartType === 'Spending' ? 'rgba(255, 99, 132, 0)' : 'rgba(100, 220, 132, 0)'
			);

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
				tension: 0.1,
				pointRadius: 3,
				pointBackgroundColor: 'rgba(0,0,0,0)',
				borderJoinStyle: 'round',
				fill: {
					target: 'origin', // Set the fill options
				},
				showLabelBackdrop: 'true',
				data,
				borderColor:
					chartType === 'Spending' ? 'rgba(255, 99, 132, 1)' : 'rgba(100, 220, 132, 1)',
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
