import { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';
import { useTransactions } from '../../../../../context/TransactionsContext';

const Income = () => {
	const { transactions, loading, error } = useTransactions();
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

		if (transactions.length > 0) {
			calculateTotalIncome();
		}
	}, [transactions]);

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
