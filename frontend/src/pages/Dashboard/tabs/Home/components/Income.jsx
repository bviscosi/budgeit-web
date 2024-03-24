import React from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MetricCard from '../../../../../components/Cards/MetricCard/MetricCard';

const Income = () => {
	return (
		<MetricCard
			title={'Income'}
			icon={<ArrowUpwardIcon />}
			color={'rgb(28, 213, 148)'}
			backgroundColor={'rgb(28, 213, 148, 0.5)'}
			value='100,000'
		/>
	);
};

export default Income;
