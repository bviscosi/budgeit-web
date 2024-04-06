import { Grid, Box, alpha, Typography, Stack, Card } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LockIcon from '@mui/icons-material/Lock';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

const Highlights = () => {
	return (
		<Box mx={{ xs: 5, sm: 15, md: 3, lg: 20 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: `1px solid ${alpha('#b6b9bb', 0.2)}`,
							background: '#070707',
							borderRadius: '12px',
							padding: '2rem',
						}}>
						<Stack direction='column' spacing='1rem'>
							<Box
								sx={{
									display: 'flex',
									border: `1px solid ${alpha('#b6b9bb', 0.1)}`,
									background: 'linear-gradient(#25242a, #131316)',
									borderRadius: '12px',
									width: '60px',
									height: '60px',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<ElectricBoltIcon fontSize='large' />
							</Box>
							<Typography variant='h4'>Real-Time Budget Tracking</Typography>
							<Typography variant='body2'>
								Stay on top of your finances with live updates. See where your money is
								going at a glance and adjust your spending before you exceed your budget.
							</Typography>
						</Stack>
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: `1px solid ${alpha('#b6b9bb', 0.2)}`,
							background: '#070707',
							borderRadius: '12px',
							padding: '2rem',
						}}>
						<Stack direction='column' spacing='1rem'>
							<Box
								sx={{
									display: 'flex',
									border: `1px solid ${alpha('#b6b9bb', 0.1)}`,
									background: 'linear-gradient(#25242a, #131316)',
									borderRadius: '12px',
									width: '60px',
									height: '60px',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<LockIcon fontSize='large' />
							</Box>
							<Typography variant='h4'>Safe and Secure</Typography>
							<Typography variant='body2'>
								Your privacy and security are our top priorities. Enjoy peace of mind
								knowing your data is protected with bank-level encryption and security
								practices.
							</Typography>
						</Stack>
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: `1px solid ${alpha('#b6b9bb', 0.2)}`,
							background: '#070707',
							borderRadius: '12px',
							padding: '2rem',
						}}>
						<Stack direction='column' spacing='1rem'>
							<Box
								sx={{
									display: 'flex',
									border: `1px solid ${alpha('#b6b9bb', 0.1)}`,
									background: 'linear-gradient(#25242a, #131316)',
									borderRadius: '12px',
									width: '60px',
									height: '60px',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<AssuredWorkloadIcon fontSize='large' />
							</Box>
							<Typography variant='h4'>Connect With Ease</Typography>
							<Typography variant='body2'>
								Experience the simplicity of having all your financial information in one
								place, thanks to our secure integration with Plaid.
							</Typography>
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Highlights;
