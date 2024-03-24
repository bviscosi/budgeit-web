import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const MetricCard = ({ title, value, icon, backgroundColor, color }) => {
	return (
		<Stack
			sx={{
				border: '1px solid white',
				height: '100%',
				padding: '1rem',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '1rem',
			}}>
			<Stack
				direction='column'
				justifyContent='space-between'
				width='100%'
				height='100%'
				spacing={1}>
				<Stack direction='row' alignItems={'center'} spacing={3}>
					<Box
						sx={{
							height: '3rem',
							width: '3rem',
							borderRadius: '100%',
							padding: '1rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: backgroundColor,
							color: color,
						}}>
						{icon}
					</Box>
					<Typography variant='h4'>{title}</Typography>
				</Stack>

				<Typography variant='h2'>${value}</Typography>
			</Stack>
		</Stack>
	);
};

export default MetricCard;
