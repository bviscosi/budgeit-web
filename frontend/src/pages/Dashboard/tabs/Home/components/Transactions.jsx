import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useCustomTheme } from '../../../../../context/ThemeContext';
import { useTransactions } from '../../../../../context/TransactionsContext';

const columns = [
	{ id: 'date', label: 'Date' },
	{ id: 'merchant_name', label: 'Merchant' },
	{ id: 'amount', label: 'Amount', align: 'right' },
];

const Transactions = () => {
	const { mode } = useCustomTheme();
	const { transactions, loading, error } = useTransactions();

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
						{transactions.map((row, index) => (
							<TableRow key={index} hover>
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
