import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Box, Container, Grid, Paper, useTheme } from '@mui/material';

const Home = ({ handleLogout }) => {
	const theme = useTheme(); // Accessing the theme

	return (
		<Box className='page' sx={{ backgroundColor: theme.palette.background.main }}>
			<div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
				<Sidebar handleLogout={handleLogout} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
					}}>
					<Topbar></Topbar>

					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 3 }}
						sx={{
							height: '100%',
							width: '100%',
							padding: '2rem',
						}}>
						<Grid item xs={6} md={6}>
							<Paper
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									// border: `1px solid ${theme.palette.card.border}`,
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									// backgroundColor: '#f7f8fa',
									borderRadius: '20px',
								}}></Paper>
						</Grid>
						<Grid item xs={6} md={6}>
							<Paper
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									// border: `1px solid ${theme.palette.card.border}`,
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									// backgroundColor: '#f7f8fa',
									borderRadius: '20px',
								}}></Paper>
						</Grid>
						<Grid item xs={6} md={6}>
							<Paper
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									// border: `1px solid ${theme.palette.card.border}`,
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									// backgroundColor: '#f7f8fa',
									borderRadius: '20px',
								}}></Paper>
						</Grid>
						<Grid item xs={6} md={6}>
							<Paper
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									// border: `1px solid ${theme.palette.card.border}`,
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									// backgroundColor: '#f7f8fa',
									borderRadius: '20px',
								}}></Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		</Box>
	);
};

export default Home;
