import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Stack,
	Box,
	Divider,
	CircularProgress,
} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FlightIcon from '@mui/icons-material/Flight';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const budgets = [
	{
		title: 'Food & Restaurants',
		amount: '$412.00',
		icon: <FastfoodIcon />,
	},
	{
		title: 'Travel',
		amount: '$123.00',
		icon: <FlightIcon />,
	},
	{
		title: 'Credit Card',
		amount: '$12,003.00',
		icon: <CreditCardIcon />,
	},
	{
		title: 'Food & Restaurants',
		amount: '$412.00',
		icon: <FastfoodIcon />,
	},
	{
		title: 'Travel',
		amount: '$123.00',
		icon: <FlightIcon />,
	},
	{
		title: 'Credit Card',
		amount: '$12,003.00',
		icon: <CreditCardIcon />,
	},
];

const BudgetItem = ({ title, amount, icon }) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem 0' }}>
			<Box sx={{ position: 'relative', display: 'inline-flex', marginRight: '1rem' }}>
				<CircularProgress variant='determinate' value={50} size={50} thickness={3} />
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						// color: 'primary.main',
						'& > *': {
							padding: '0.1em', // Adding space around the icon
						},
					}}>
					{icon}
				</Box>
			</Box>
			<Typography variant='p' sx={{ flexGrow: 1 }}>
				{title}
			</Typography>
			<Typography variant='p'>{amount}</Typography>
		</Box>
	);
};

const Budgets = () => {
	return (
		<Card sx={{ borderRadius: '1rem', height: '27.5rem', overflow: 'hidden' }}>
			<CardContent sx={{ paddingBottom: '0 !important' }}>
				<Typography variant='h4' sx={{ marginBottom: '1rem' }}>
					Budgets
				</Typography>
			</CardContent>
			<Box
				sx={{
					px: '2rem',
					overflowY: 'auto',
					height: 'calc(27.5rem - 64px)', // Subtract the height of the title and padding
				}}>
				{budgets.map((budget, index) => (
					<React.Fragment key={index}>
						<BudgetItem {...budget} />
						{index < budgets.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</Box>
		</Card>
	);
};

export default Budgets;
