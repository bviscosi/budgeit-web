import { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import { useTransactions } from '../../../../../context/TransactionsContext';

const Income = () => {
	const { transactions, loading, error, fetchTransactions } = useTransactions();
	const [income, setIncome] = useState(0);

	useEffect(() => {
		const calculateTotalIncome = () => {
			const totalIncome = transactions.reduce((acc, transaction) => {
				if (transaction.amount < 0) {
					acc += Math.abs(transaction.amount);
				}
				return acc;
			}, 0);
			setIncome(totalIncome.toFixed(2));
		};

		// Example dates, replace with actual dynamic dates
		const startDate = '2023-11-01';
		const endDate = '2024-01-01';

		if (transactions.length === 0) {
			fetchTransactions(startDate, endDate);
		} else {
			calculateTotalIncome();
		}
	}, [transactions, fetchTransactions]);

	return (
		<MetricCard
			title={'Income'}
			icon={<ArrowUpwardIcon />}
			loading={loading}
			color={'rgb(28, 213, 148)'}
			backgroundColor={'rgb(28, 213, 148, 0.5)'}
			value={income}
		/>
	);
};

export default Income;
