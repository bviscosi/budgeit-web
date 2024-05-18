import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { addJwtHeader } from '../../../../../utils/addJwtHeader';
import { useCustomTheme } from '../../../../../context/ThemeContext';
import { useTransactions } from '../../../../../context/TransactionsContext';

const columns = [
	{ id: 'date', label: 'Date' },
	{ id: 'merchant_name', label: 'Merchant' },
	{ id: 'amount', label: 'Amount', align: 'right' },
];

const Transactions = () => {
	const { mode } = useCustomTheme(); // Get the current mode from the context

	// const [rows, setRows] = useState([]);
	const { transactions, loading, error } = useTransactions();

	// useEffect(() => {
	// 	const fetchTransactions = async (startDate, endDate) => {
	// 		setLoading(true);
	// 		setError('');
	// 		try {
	// 			const response = await axios.get(
	// 				`/transactions?startDate=${startDate}&endDate=${endDate}`,
	// 				{ headers: addJwtHeader() }
	// 			);

	// 			const fetchedRows = response.data.transactions.map((transaction, index) => ({
	// 				id: index,
	// 				...transaction,
	// 			}));

	// 			setRows(fetchedRows);
	// 		} catch (error) {
	// 			console.error('Error fetching transactions:', error);
	// 			setError('Failed to fetch transactions');
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	const startDate = '2023-11-01';
	// 	const endDate = '2024-01-01';
	// 	fetchTransactions(startDate, endDate);
	// }, []);

	return (
		<Card sx={{ height: '27.5rem', width: '100%', p: 0, borderRadius: '1rem', overflow: 'auto' }}>
			<TableContainer sx={{ maxHeight: '100%' }}>
				<Table stickyHeader aria-label='transactions table'>
					<TableHead
						sx={{
							'.MuiTableCell-head': {
								backgroundColor: mode === 'dark' ? '#25242a' : '#f7f8fa',
							},
						}}>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{transactions.map((row) => (
							<TableRow key={row.id} hover>
								{columns.map((column) => (
									<TableCell key={column.id} align={column.align}>
										{row[column.id]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Card>
	);
};

export default Transactions;
