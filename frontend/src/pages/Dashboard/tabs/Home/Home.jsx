import { Grid, Stack } from '@mui/material';
import Balance from './components/Balance';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Budgets from './components/Budgets';
import Transactions from './components/Transactions';
import Analytics from './components/Analytics';

// pull this into context eventually
const Home = () => {
	return (
		<Stack style={{ gap: '1.5rem', margin: '1rem' }}>
			{/* top row */}
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<Balance />
				</Grid>
				<Grid item xs={4}>
					<Income />
				</Grid>
				<Grid item xs={4}>
					<Expenses />
				</Grid>
			</Grid>
			{/* main section */}
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Stack direction={'column'} spacing={3}>
						<Budgets />
						<Analytics />
					</Stack>
				</Grid>

				<Grid item xs={4}>
					<Transactions />
				</Grid>
			</Grid>
		</Stack>
	);
};

export default Home;
