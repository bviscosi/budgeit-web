import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { addJwtHeader } from '../utils/addJwtHeader';

const TransactionsContext = createContext();

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider = ({ children }) => {
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchTransactions = useCallback(async (startDate, endDate) => {
		setLoading(true);
		setError('');
		try {
			const response = await axios.get(
				`/transactions?startDate=${startDate}&endDate=${endDate}`,
				{ headers: addJwtHeader() }
			);
			setTransactions(response.data.transactions);
		} catch (error) {
			console.error('Error fetching transactions:', error);
			setError('Failed to fetch transactions');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		const startDate = '2023-11-01';
		const endDate = '2024-06-01';
		fetchTransactions(startDate, endDate);
	}, [fetchTransactions]);

	return (
		<TransactionsContext.Provider value={{ transactions, loading, error, fetchTransactions }}>
			{children}
		</TransactionsContext.Provider>
	);
};
