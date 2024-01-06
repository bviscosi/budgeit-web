import React, { useState } from 'react';
import { Button, Typography, Menu, MenuItem, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileCircle } from './styles.jsx';
import { useTheme } from '../../../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

// Custom style for the Menu
const StyledMenu = styled(Menu)(({ theme }) => ({
	'& .MuiPaper-root': {
		border: '1px solid #474747',
		backgroundColor: '#2c2c2c',
		color: 'white',
		boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
	},
}));

const UserDropdown = ({ handleLogout }) => {
	const { theme } = useTheme();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				sx={{
					border: '1px solid #474747',
					borderRadius: '30px',
					boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
					textTransform: 'none',
					color: 'white',
					padding: 1,
					marginRight: 2,
					'&:hover': {
						backgroundColor: 'rgba(255, 255, 255, 0.08)',
					},
				}}
				onClick={handleClick}
				endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}>
				<Typography variant='h6' component='span' sx={{ marginRight: 1 }}>
					Ben Viscosi
				</Typography>
			</Button>
			<StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						handleLogout();
						navigate('/sign-in');
					}}
					sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>
					Logout
				</MenuItem>
			</StyledMenu>
		</>
	);
};

export default UserDropdown;
