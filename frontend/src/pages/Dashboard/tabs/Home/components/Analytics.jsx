import { useState } from 'react';
import {
	Box,
	Card,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Typography,
} from '@mui/material';
import IncomeChart from './IncomeChart';
import SpendingChart from './SpendingChart';

const Analytics = () => {
	const [chartType, setChartType] = useState('Spending');

	const handleChange = (event) => {
		setChartType(event.target.value);
	};

	return (
		<Card
			sx={{
				height: '100%',
				padding: 2,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
			}}>
			<Stack
				sx={{
					height: '30rem',
					alignItems: 'center',
					// justifyContent: 'space-between',
					borderRadius: '1rem',
				}}>
				<Box
					alignSelf='flex-start'
					fontWeight='600'
					marginLeft={2}
					marginTop={2}
					color='text.primary'>
					<FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={chartType}
							onChange={handleChange}
							label='none'
							fontWeight='600'>
							<MenuItem value={'Spending'} fontSize='h4'>
								Spending
							</MenuItem>
							<MenuItem value={'Income'} fontSize='h4'>
								Income
							</MenuItem>
						</Select>
					</FormControl>
				</Box>
				{/* <Typography
					variant='h4'
					alignSelf='flex-start'
					fontWeight='600'
					marginLeft={2}
					marginTop={2}
					color='text.primary'>
					{chartType}
				</Typography> */}
				{chartType === 'Income' && <IncomeChart />}
				{chartType === 'Spending' && <SpendingChart />}
			</Stack>
		</Card>
	);
};

export default Analytics;
