import { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
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

const GradientBorderWrapper = styled('div')(() => ({
	height: '100%',
	position: 'relative',
	padding: '2px',
	background:
		'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)',
	borderRadius: '1rem',
	'&:before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 'inherit',
		padding: '1rem',
		background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
		zIndex: -1,
	},
}));

const columns = [
	{ id: 'date', label: 'Date' },
	{ id: 'merchant_name', label: 'Merchant' },
	{ id: 'amount', label: 'Amount', align: 'right' },
];

const Transactions = () => {
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
					id: index,
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

		const startDate = '2023-11-01';
		const endDate = '2024-01-01';
		fetchTransactions(startDate, endDate);
	}, []);

	return (
		// <Stack sx={{ height: '100%' }}>
		// 	<Typography variant='h3' p={2} textAlign={'center'}>
		// 		Recent Transactions
		// 	</Typography>
		// <GradientBorderWrapper>
		<Card sx={{ height: '100%', width: '100%', p: 0, borderRadius: '1rem', overflow: 'auto' }}>
			<TableContainer>
				<Table stickyHeader aria-label='transactions table'>
					<TableHead
						sx={{
							'.MuiTableCell-head': {
								// backgroundColor: 'background.paper',
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
						{rows.map((row) => (
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
		// </GradientBorderWrapper>
		// </Stack>
	);
};

export default Transactions;
