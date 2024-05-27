import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Box,
	Divider,
	Stack,
	Typography,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BudgetItem from '../../../../components/Budgets/BudgetItem';
import BudgetForm from '../../../../components/Budgets/BudgetForm';
import { budgets } from '../../../../constants/budgets';

const Budgets = () => {
	const [open, setOpen] = useState(false);
	// const [budgets, setBudgets] = useState([]);

	// useEffect(() => {
	//     const fetchBudgets = async () => {
	//         const response = await axios.get('/api/budgets');
	//         setBudgets(response.data);
	//     };
	//     fetchBudgets();
	// }, []);

	const handleDelete = async (id) => {
		await axios.delete(`/api/budgets/${id}`);
		// setBudgets(budgets.filter((budget) => budget._id !== id));
	};

	const handleAddBudget = () => {
		setOpen(true);
	};

	const handleSaveBudget = async (budgetData) => {
		// Send POST request to save the new budget
		const response = await axios.post('/api/budgets', budgetData);
		// setBudgets([...budgets, response.data]);
		setOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
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
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add New Budget</DialogTitle>
				<DialogContent>
					<BudgetForm onSave={handleSaveBudget} onCancel={handleClose} />
				</DialogContent>
			</Dialog>
		</Stack>
	);
};

export default Budgets;
