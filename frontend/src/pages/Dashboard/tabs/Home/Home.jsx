import { Grid, Stack } from '@mui/material';
import Balance from './components/Balance';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Budgets from './components/Budgets';
import Transactions from './components/Transactions';
import Analytics from './components/Analytics';
import Categories from './components/Categories';

const Home = () => {
	return (
		<Stack style={{ gap: '1.5rem', margin: '2rem' }}>
			{/* top row */}
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<Balance />
				</Grid>
				<Grid item xs={12} md={4}>
					<Income />
				</Grid>
				<Grid item xs={12} md={4}>
					<Expenses />
				</Grid>
			</Grid>
			{/* main section */}
			<Grid container spacing={3}>
				<Grid item xs={12} md={8}>
					<Stack direction={'column'} spacing={3}>
						<Analytics />
						<Categories />
					</Stack>
				</Grid>

				<Grid item xs={12} md={4}>
					<Stack direction={'column'} spacing={3}>
						<Budgets />
						<Transactions />
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default Home;
