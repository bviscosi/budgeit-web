import React from 'react';
import b_logo from '../../../../assets/b.png';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WalletIcon from '@mui/icons-material/Wallet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Person from '@mui/icons-material/Person';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<img
				src={b_logo}
				alt=''
				style={{
					width: '70px',
				}}></img>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					gap: '7vh',
					justifyContent: 'center',
				}}>
				<Button sx={{ color: '#6c7793' }}>
					<GridViewIcon />
				</Button>
				<Button sx={{ color: '#6c7793' }}>
					<SavingsIcon />
				</Button>
				<Button sx={{ color: '#6c7793' }}>
					<WalletIcon />
				</Button>
				<Button sx={{ color: '#6c7793' }}>
					<PersonIcon />
				</Button>
			</div>

			<Button sx={{ color: '#6c7793' }}>
				<SettingsIcon />
			</Button>
		</div>
	);
};

export default Sidebar;
