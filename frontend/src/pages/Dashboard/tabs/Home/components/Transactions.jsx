import { Card, Stack, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

// Define the columns for the DataGrid
const columns = [
	{ field: 'date', headerName: 'Date' },
	{ field: 'merchant_name', headerName: 'Merchant' },
	{ field: 'amount', headerName: 'Amount', type: 'number' },
	{
		field: 'category',
		headerName: 'Category',
		width: '300',
		valueGetter: (params) => params.row.category.join(', '),
	},
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
		<GradientBorderWrapper>
			<Card
				sx={{
					height: '100%',
					padding: '1rem',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '1rem',
					background: 'linear-gradient(0deg, rgba(26,25,31,1) 0%, rgba(31,30,36,1) 100%)',
					border: '1px ',
				}}>
				<Stack
					sx={{
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '1rem',
					}}>
					<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
				</Stack>
			</Card>
		</GradientBorderWrapper>
	);
};

export default Transactions;
