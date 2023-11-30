import { Button } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileCircle, lightModeButton } from './styles.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import b_logo from '../../../../assets/b.png';

const Topbar = () => {
	return (
		<div>
			<div
				className='topbar'
				style={{
					marginRight: '1rem',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					// margin: '0.5rem',
				}}>
				<h1 style={{ marginLeft: '2rem', fontSize: '2.5rem', color: '#3C3C3C' }}>Dashboard</h1>
				<div className='row'>
					<Button>
						<div style={lightModeButton}>
							<DarkModeIcon />
						</div>
					</Button>
					<Button
						sx={{
							border: '1px solid #d8dee8',
							borderRadius: '30px',
							boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
							backgroundColor: '#F7F8FA',
						}}>
						<div style={profileCircle}></div>

						<h4 style={{ margin: '0', marginRight: '0.5rem', color: '#3C3C3C' }}>Benjamin</h4>
						<KeyboardArrowDownIcon style={{ color: '#6c7793' }} />
					</Button>
				</div>
			</div>
			{/* <hr /> */}
		</div>
	);
};

export default Topbar;
