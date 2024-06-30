import { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import { useTransactions } from '../../../../../context/TransactionsContext';

const Expenses = () => {
	const { transactions, loading, error } = useTransactions();
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

		if (transactions.length !== 0) {
			calculateTotalExpenses();
		}
	}, [transactions]);

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
