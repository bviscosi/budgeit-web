import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Box, Container, Paper, useTheme } from '@mui/material';

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

					<div className='main'>
						<div style={{ display: 'flex', height: '100%', width: '100%', gap: '2rem' }}>
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
						</div>
						<div style={{ display: 'flex', height: '100%', width: '100%', gap: '2rem' }}>
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
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default Home;
