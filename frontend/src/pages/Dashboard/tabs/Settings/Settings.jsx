import { Button } from '@mui/material';
import React, { useState } from 'react';
import PlaidLink from '../../../PlaidLink/PlaidLink';

const Settings = () => {
	const [showPlaid, setShowPlaid] = useState(false);

	return (
		<div>
			<Button
				onClick={() => {
					setShowPlaid(true);
				}}>
				Connect New Bank
			</Button>
			{showPlaid && <PlaidLink />}
		</div>
	);
};

export default Settings;
