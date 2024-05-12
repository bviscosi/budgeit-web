import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Box,
	Divider,
	CircularProgress,
	Stack,
} from '@mui/material';
import { budgets } from '../../../../../constants/budgets';

const Budgets = () => {
	return (
		<Card sx={{ borderRadius: '1rem', height: '27.5rem', overflow: 'hidden' }}>
			<CardContent sx={{ paddingBottom: '0 !important' }}>
				<Typography variant='h4' fontWeight={600} ml={2} mt={2} sx={{ marginBottom: '1rem' }}>
					Budgets
				</Typography>
			</CardContent>
			<Box
				sx={{
					px: 3,
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

const BudgetItem = ({ title, amount, icon, color }) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem 0' }}>
			<Box sx={{ position: 'relative', display: 'inline-flex', marginRight: '1rem' }}>
				<CircularProgress
					variant='determinate'
					value={50}
					size={50}
					thickness={3}
					sx={{ color: `${color}` }}
				/>

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
			<Typography variant='p' fontWeight={500} sx={{ flexGrow: 1 }}>
				{title}
			</Typography>
			<Stack direction='column' alignItems={'flex-end'}>
				<Typography variant='body' fontWeight={600}>
					{amount}
				</Typography>
				<Typography variant='caption'>
					{amount} of {amount}
				</Typography>
			</Stack>
		</Box>
	);
};

export default Budgets;
