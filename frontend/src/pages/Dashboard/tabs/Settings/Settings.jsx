import { Button, Stack, Card, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import PlaidLink from '../../../PlaidLink/PlaidLink';

const Settings = () => {
	const [showPlaid, setShowPlaid] = useState(false);

	return (
		<Stack direction='column' margin={'2rem'}>
			<Card padding='2rem'>
				<Stack direction='row' alignItems='center' m={2}>
					<Typography variant='h5' width='25rem'>
						Bank Account
					</Typography>
					<Typography variant='h5' width='100%' textAlign='flex-start'>
						No bank account connected
					</Typography>

					<Button
						sx={{ px: '1rem' }}
						variant='text'
						onClick={() => {
							setShowPlaid(true);
						}}>
						Connect
					</Button>
				</Stack>
				<Divider />

				<Stack direction='row' alignItems='center' m={2}>
					<Typography variant='h5' width='25rem'>
						Subscription
					</Typography>
					<Typography variant='h5' width='100%' textAlign='flex-start'>
						No subscription active
					</Typography>

					<Button
						variant='text'
						sx={{ px: '1rem' }}
						onClick={() => {
							// setShowPlaid(true);
						}}>
						Upgrade
					</Button>
				</Stack>

				{showPlaid && <PlaidLink />}
			</Card>
		</Stack>
	);
};

export default Settings;
