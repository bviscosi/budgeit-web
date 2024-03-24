import { Grid, Stack } from '@mui/material';
import Balance from './components/Balance';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Budgets from './components/Budgets';

// pull this into context eventually
const Home = ({ transactions }) => {
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
					<Budgets />
					<Stack
						sx={{
							border: '1px solid white',
							height: '30rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Cash Flow Analytics
					</Stack>
				</Grid>

				<Grid item xs={4}>
					<Stack
						sx={{
							border: '1px solid white',
							height: '59rem',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '1rem',
						}}>
						Recent Transactions
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default Home;
