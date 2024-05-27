import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const BudgetForm = ({ onSave, onCancel }) => {
	const [category, setCategory] = useState('');
	const [limit, setLimit] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const budgetData = { category, limit };
		// Save the new budget data
		onSave(budgetData);
	};

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			<TextField
				label='Category'
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				required
			/>
			<TextField
				label='Limit'
				type='number'
				value={limit}
				onChange={(e) => setLimit(e.target.value)}
				required
			/>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
				<Button onClick={onCancel}>Cancel</Button>
				<Button type='submit' variant='contained' color='primary'>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default BudgetForm;
