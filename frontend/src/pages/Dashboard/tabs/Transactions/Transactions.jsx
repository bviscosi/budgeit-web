import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const Transactions = ({ transactions }) => {
	// Define the columns for the DataGrid
	const columns = [
		{ field: 'date', headerName: 'Date', width: '300' },
		{ field: 'merchant_name', headerName: 'Merchant', width: '300' },
		{ field: 'amount', headerName: 'Amount', type: 'number', width: '300' },
		{
			field: 'category',
			headerName: 'Category',
			width: '300',
			valueGetter: (params) => params.row.category.join(', '),
		},
		// Add more fields as needed
	];

	// Map transactions to the format expected by DataGrid
	const rows = transactions.map((transaction, index) => ({
		id: index, // DataGrid requires a unique 'id' field for each row
		...transaction,
	}));

	return (
		<Paper sx={{ height: '100%', margin: '2rem' }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
		</Paper>
	);
};

export default Transactions;
