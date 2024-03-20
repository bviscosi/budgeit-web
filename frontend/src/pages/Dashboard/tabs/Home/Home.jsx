import React from 'react';

import NetWorth from './components/NetWorth/NetWorth';
import IncomeVsExpenses from './components/IncomeVsExpenses/IncomeVsExpenses';

const Home = () => {
	return (
		<div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
			<NetWorth /> <IncomeVsExpenses />
		</div>
	);
};

export default Home;
