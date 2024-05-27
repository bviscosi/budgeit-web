import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Divider, Stack, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BudgetItem } from '../../../../components/Budgets/BudgetItem';
import { budgets } from '../../../../constants/budgets';

const Budgets = () => {
	// const [budgets, setBudgets] = useState([]);

	// useEffect(() => {
	// 	const fetchBudgets = async () => {
	// 		const response = await axios.get('/api/budgets');
	// 		setBudgets(response.data);
	// 	};
	// 	fetchBudgets();
	// }, []);

	const handleDelete = async (id) => {
		await axios.delete(`/api/budgets/${id}`);
		// setBudgets(budgets.filter((budget) => budget._id !== id));
	};

	const handleAddBudget = () => {
		// Implement the functionality to add a new budget
	};

	return (
		<Stack style={{ gap: '1.5rem', margin: '2rem' }}>
			<Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
				<Typography variant='h4' fontWeight={600}>
					Your Budgets
				</Typography>
				<IconButton color='primary' onClick={handleAddBudget}>
					<AddIcon />
				</IconButton>
			</Box>
			<Box
				sx={{
					px: 3,
					overflowY: 'auto',
					height: 'calc(100vh - 200px)', // Adjust height as needed
				}}>
				{budgets.map((budget, index) => (
					<React.Fragment key={index}>
						<BudgetItem {...budget} />
						{index < budgets.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</Box>
		</Stack>
	);
};

export default Budgets;
