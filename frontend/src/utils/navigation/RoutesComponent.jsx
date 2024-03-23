import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';
import PlaidLink from '../../pages/PlaidLink/PlaidLink';
import Dashboard from '../../pages/Dashboard/Dashboard';
import LandingPage from '../../pages/LandingPage/LandingPage';

const RoutesComponent = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Check local storage on component mount
	useEffect(() => {
		const checkLoggedIn = localStorage.getItem('isLoggedIn');
		if (checkLoggedIn === 'true') {
			setIsLoggedIn(true);
		}
	}, []);

	// Function to update isLoggedIn and local storage
	const handleLogin = () => {
		console.log('logged in');
		setIsLoggedIn(true);
		localStorage.setItem('isLoggedIn', true);
	};

	// Function to update isLoggedIn and local storage
	const handleLogout = () => {
		console.log('logged out');
		localStorage.setItem('isLoggedIn', false);
		setIsLoggedIn(false);
	};

	return (
		<Routes>
			{/* <Route
				path='/'
				element={
					isLoggedIn ? (
						<Dashboard handleLogout={handleLogout} />
					) : (
						<SignIn handleLogin={handleLogin} />
					)
				}
			/> */}
			<Route path='/' element={<LandingPage />} />
			<Route path='/dashboard' element={<Dashboard handleLogout={handleLogout} />} />
			<Route path='/sign-in' element={<SignIn handleLogin={handleLogin} />} />
			<Route path='/sign-up' element={<SignUp handleLogin={handleLogin} />} />
			<Route path='/plaid-link' element={<PlaidLink />} />
		</Routes>
	);
};

export default RoutesComponent;
