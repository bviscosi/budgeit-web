import React from 'react';
import { Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { paper } from './styles';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeVsExpenses = () => {
	// Sample data
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May'], // Update with your labels
		datasets: [
			{
				label: 'Income',
				data: [500, 700, 800, 900, 1000], // Sample income data
				backgroundColor: '#46aa6f',
				barThickness: 10, // Adjust this value as needed
			},
			{
				label: 'Expenses',
				data: [300, 400, 500, 600, 700], // Sample expenses data
				backgroundColor: '#f6685b',
				barThickness: 10, // Adjust this value as needed
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Income vs Expenses',
			},
		},
	};

	return (
		<Paper sx={paper}>
			<Bar data={data} options={options} />
		</Paper>
	);
};

export default IncomeVsExpenses;
