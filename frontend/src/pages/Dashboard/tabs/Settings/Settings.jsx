import { Button, Stack, Card, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import PlaidLink from '../../../PlaidLink/PlaidLink';

const Settings = () => {
	const [showPlaid, setShowPlaid] = useState(false);

	return (
		<Stack direction='column' margin={'2rem'}>
			<Card padding='2rem'>
				<Stack direction='row' alignItems='center' justifyContent='space-between' m={2}>
					<Typography variant='h5'>Bank Account</Typography>
					<Typography variant='h5'>No bank account connected</Typography>

					<Button
						variant='text'
						onClick={() => {
							setShowPlaid(true);
						}}>
						Connect New Bank
					</Button>
				</Stack>
				<Divider />

				<Stack direction='row' alignItems='center' justifyContent='space-between' m={2}>
					<Typography variant='h5'>Subscription</Typography>
					<Typography variant='h5'>No subscription active</Typography>

					<Button
						variant='text'
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
