import { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import { useTransactions } from '../../../../../context/TransactionsContext';

const Expenses = () => {
	const { transactions, loading, error, fetchTransactions } = useTransactions();
	const [expenses, setExpenses] = useState(0);

	useEffect(() => {
		const calculateTotalExpenses = () => {
			const totalIncome = transactions.reduce((acc, transaction) => {
				if (transaction.amount > 0) {
					acc += Math.abs(transaction.amount);
				}
				return acc;
			}, 0);
			setExpenses(totalIncome.toFixed(2));
		};

		// Example dates, replace with actual dynamic dates
		const startDate = '2023-11-01';
		const endDate = '2024-01-01';

		if (transactions.length === 0) {
			fetchTransactions(startDate, endDate);
		} else {
			calculateTotalExpenses();
		}
	}, [transactions, fetchTransactions]);

	return (
		<MetricCard
			title={'Expenses'}
			icon={<ArrowDownwardIcon />}
			loading={loading}
			color={'rgb(235, 58, 61)'}
			backgroundColor={'rgb(235, 58, 61, 0.5)'}
			value={expenses}
		/>
	);
};

export default Expenses;
