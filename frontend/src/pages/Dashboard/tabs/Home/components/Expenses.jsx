import React from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';

const Expenses = () => {
	return (
		<MetricCard
			title={'Expenses'}
			icon={<ArrowDownwardIcon />}
			color={'rgb(235, 58, 61)'}
			backgroundColor={'rgb(235, 58, 61, 0.5)'}
			value='100,000'
		/>
	);
};

export default Expenses;
