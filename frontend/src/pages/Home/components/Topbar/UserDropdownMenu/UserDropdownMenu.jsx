import React, { useRef, useState } from 'react';
import { Button, Typography, Menu, MenuItem, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileCircle } from './styles.jsx';
import { useTheme } from '../../../../../context/ThemeContext.jsx';
import { useNavigate } from 'react-router-dom';

// Custom style for the Menu
const StyledMenu = styled(Menu)(({ theme }) => ({
	'& .MuiPaper-root': {
		border: '1px solid #474747',
		backgroundColor: '#2c2c2c',
		color: 'white',
		boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
		marginTop: theme.spacing(1),
	},
}));

const UserDropdownMenu = ({ handleLogout }) => {
	const { theme } = useTheme();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const buttonRef = useRef(null); // Reference to the button

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				ref={buttonRef} // Attach the ref to the button
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between', // This will ensure spacing around the name and icon
					border: '1px solid #474747',
					borderRadius: '30px',
					boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.1)',
					textTransform: 'none',
					color: 'white',
					padding: 1,
					width: '200px', // Specify the width to match the menu width
					'&:hover': {
						backgroundColor: 'rgba(255, 255, 255, 0.08)',
					},
				}}
				onClick={handleClick}
				endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}>
				<Typography variant='h6' component='span' sx={{ flexGrow: 1, textAlign: 'center' }}>
					Ben Viscosi
				</Typography>
			</Button>
			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				PaperProps={{
					style: {
						width: buttonRef.current ? buttonRef.current.clientWidth : undefined, // Set the width of the menu
					},
				}}>
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

export default UserDropdownMenu;
