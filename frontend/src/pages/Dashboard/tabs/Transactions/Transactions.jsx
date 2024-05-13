import { useEffect, useState } from 'react';
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';
import { Card, Paper } from '@mui/material';
import { addJwtHeader } from '../../../../utils/addJwtHeader';

const Transactions = () => {
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
	];

	const [rows, setRows] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchTransactions = async (startDate, endDate) => {
			setLoading(true);
			setError('');
			try {
				const response = await axios.get(
					`/transactions?startDate=${startDate}&endDate=${endDate}`,
					{ headers: addJwtHeader() }
				);

				const fetchedRows = response.data.transactions.map((transaction, index) => ({
					id: index, // DataGrid requires a unique 'id' field for each row
					...transaction,
				}));

				setRows(fetchedRows);
			} catch (error) {
				console.error('Error fetching transactions:', error);
				setError('Failed to fetch transactions');
			} finally {
				setLoading(false);
			}
		};

		// Example dates, replace with actual dynamic dates
		const startDate = '2023-11-01';
		const endDate = '2024-01-01';
		fetchTransactions(startDate, endDate);
	}, []);

	return (
		<Card sx={{ height: '100%', margin: '2rem', borderRadius: '1rem' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				sx={{ borderRadius: '1rem', border: 0, color: 'text.primary' }}
			/>
		</Card>
	);
};

export default Transactions;
