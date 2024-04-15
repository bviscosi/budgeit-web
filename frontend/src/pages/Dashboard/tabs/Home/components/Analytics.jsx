import { useRef, useEffect } from 'react';
import { Card, Stack, styled } from '@mui/material';
import { Line } from 'react-chartjs-2';

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
				<PrettyLineChart />
			</Stack>
		</Card>
	);
};

const PrettyLineChart = ({ data, labels }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			const chart = chartRef.current.chartInstance;
			const ctx = chart.ctx;
			const gradient = ctx.createLinearGradient(0, 0, 0, 400);
			gradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)');
			gradient.addColorStop(1, 'rgba(255, 159, 64, 0.2)');

			chart.data.datasets.forEach((dataset) => {
				dataset.backgroundColor = gradient; // Apply the gradient to dataset
				dataset.borderColor = 'rgba(255, 99, 132, 1)';
				dataset.pointBackgroundColor = 'rgba(255, 99, 132, 1)';
				dataset.pointBorderColor = '#fff';
				dataset.pointHoverBackgroundColor = '#fff';
				dataset.pointHoverBorderColor = 'rgba(255, 99, 132, 1)';
			});

			chart.update();
		}
	}, [data]);

	const chartData = {
		labels,
		datasets: [
			{
				label: 'My First dataset',
				fill: true,
				lineTension: 0.3,
				borderWidth: 2,
				data,
				pointRadius: 4,
				pointHoverRadius: 6,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
		legend: {
			labels: {
				fontSize: 20,
			},
		},
	};

	return (
		<div style={{ height: '400px' }}>
			<Line ref={chartRef} data={chartData} options={options} />
		</div>
	);
};

export default Analytics;
