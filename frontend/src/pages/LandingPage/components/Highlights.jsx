import { Grid, Box, alpha, Icon } from '@mui/material';
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
							height: '250px',
							borderRadius: '12px',
							padding: '2rem',
						}}>
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
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: `1px solid ${alpha('#b6b9bb', 0.2)}`,
							background: '#070707',
							height: '250px',
							borderRadius: '12px',
							padding: '2rem',
						}}>
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
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: `1px solid ${alpha('#b6b9bb', 0.2)}`,
							background: '#070707',
							height: '250px',
							borderRadius: '12px',
							padding: '2rem',
						}}>
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
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Highlights;
