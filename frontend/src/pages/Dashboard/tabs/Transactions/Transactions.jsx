import { DataGrid } from '@mui/x-data-grid';
import { Card } from '@mui/material';
import { useTransactions } from '../../../../context/TransactionsContext';

const Transactions = () => {
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

	const { transactions, loading, error } = useTransactions();

	return (
		<Card sx={{ height: '100%', margin: '2rem', borderRadius: '1rem' }}>
			<DataGrid
				rows={transactions.map((transaction, index) => ({
					id: index, // DataGrid requires a unique 'id' field for each row
					...transaction,
				}))}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				sx={{ borderRadius: '1rem', border: 0, color: 'text.primary' }}
			/>
		</Card>
	);
};

export default Transactions;
