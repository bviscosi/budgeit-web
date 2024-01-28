import React from 'react';
import styles from './styles';
import { Button } from '@mui/material';

const SidebarButton = (tab, handleSetTab) => {
	const classes = styles(tab);
	return (
		<Button
			sx={{
				color: tab === 'account' ? '#ffffff' : '#858585',
			}}
			onClick={() => handleSetTab('account')}>
			<PersonIcon sx={classes.iconStyles} />
		</Button>
	);
};

export default SidebarButton;
