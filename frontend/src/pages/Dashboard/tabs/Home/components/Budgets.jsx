import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import { budgets } from '../../../../../constants/budgets';
import BudgetItem from '../../../../../components/Budgets/BudgetItem';

const Budgets = () => {
	return (
		<Card sx={{ borderRadius: '1rem', overflow: 'hidden', height: '32rem' }}>
			<CardContent sx={{ paddingBottom: '0 !important' }}>
				<Typography
					variant='h4'
					fontWeight={600}
					ml={2}
					mt={2}
					mb={'1rem'}
					color='text.primary'>
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

export default Budgets;
