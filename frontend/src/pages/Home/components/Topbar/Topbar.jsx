import { Button } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileCircle, lightModeButton } from './styles.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Topbar = () => {
	return (
		<div
			className='topbar'
			style={{
				marginRight: '10px',
				marginTop: '5px',
				marginBottom: '5px',
				display: 'flex',
				justifyContent: 'flex-end',
				// height: '10vh',
			}}>
			<Button>
				<div style={lightModeButton}>
					<DarkModeIcon />
				</div>
			</Button>
			<Button sx={{ border: '1px solid #d8dee8', borderRadius: '30px' }}>
				<div style={profileCircle}></div>

				<h3 style={{ margin: '0', marginRight: '0.75rem', color: '#14141f' }}>Benjamin</h3>
				<KeyboardArrowDownIcon style={{ color: '#6c7793' }} />
			</Button>
		</div>
	);
};

export default Topbar;
