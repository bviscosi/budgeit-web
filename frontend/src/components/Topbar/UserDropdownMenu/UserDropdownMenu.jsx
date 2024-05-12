import { useRef, useState } from 'react';
import { Button, Typography, Menu, MenuItem, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import { button, menuItem } from './styles';

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
				sx={button}
				onClick={handleClick}>
				<Typography
					variant='p'
					sx={{
						textAlign: 'center',
						color: 'text.primary',
						padding: 0,
						margin: 0,
						fontSize: '14px',
					}}>
					B
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
					sx={menuItem}>
					Logout
				</MenuItem>
			</StyledMenu>
		</>
	);
};

export default UserDropdownMenu;
