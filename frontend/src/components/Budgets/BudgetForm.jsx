import { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { categories } from '../../constants/categories';

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
				select
				label='Category'
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				required
				fullWidth
				margin='dense'>
				{Object.entries(categories).map(([key, value]) => (
					<MenuItem key={key} value={key}>
						{value}
					</MenuItem>
				))}
			</TextField>
			<TextField
				label='Limit'
				type='number'
				value={limit}
				onChange={(e) => setLimit(e.target.value)}
				required
				fullWidth
				margin='dense'
			/>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
				<Button onClick={onCancel} variant='outlined'>
					Cancel
				</Button>
				<Button type='submit' variant='contained' color='primary'>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default BudgetForm;
