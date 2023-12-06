import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileCircle, lightModeButton } from './styles.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../../../context/ThemeContext.jsx';

const Topbar = () => {
	const { theme, toggleThemeMode } = useTheme();

	return (
		<div>
			<div
				className='topbar'
				style={{
					marginRight: '1rem',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '1rem',
				}}>
				<Typography
					variant='h1'
					fontWeight='bold'
					style={{
						marginLeft: '2rem',
						fontSize: '2.5rem',
						// color: theme.palette.primary.main,
					}}>
					Dashboard
				</Typography>
				<div className='row'>
					<Button onClick={toggleThemeMode}>
						<Paper style={lightModeButton}>
							<DarkModeIcon />
						</Paper>
					</Button>
					<Button
						sx={{
							border: `1px solid ${theme.palette.card.border}`,
							borderRadius: '30px',
							boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
							// backgroundColor: '#F7F8FA',
						}}>
						<div style={profileCircle}></div>

						<Typography variant='h4' style={{ margin: '0', marginRight: '0.5rem' }}>
							Benjamin
						</Typography>
						<KeyboardArrowDownIcon />
					</Button>
				</div>
			</div>
			{/* <hr /> */}
		</div>
	);
};

export default Topbar;
