import { Grid, Box } from '@mui/material';

const Highlights = () => {
	return (
		<Box mx={{ xs: 5, sm: 15, md: 3, lg: 20 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: '1px solid white',
							height: '250px',
							borderRadius: '12px',
							padding: '2rem',
						}}>
						1
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: '1px solid white',
							height: '250px',
							borderRadius: '12px',
							padding: '2rem',
						}}>
						1
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							border: '1px solid white',
							height: '250px',
							borderRadius: '12px',
							padding: '2rem',
						}}>
						1
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Highlights;
