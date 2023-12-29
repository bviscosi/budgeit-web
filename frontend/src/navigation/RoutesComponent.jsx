import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import PlaidLink from '../pages/PlaidLink/PlaidLink';

const RoutesComponent = ({ toggleThemeMode }) => {
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
	const handleLogout = (loginStatus) => {
		console.log('logged out');
		localStorage.setItem('isLoggedIn', false);
		setIsLoggedIn(false);
	};

	return (
		<Routes>
			<Route
				path='/'
				element={
					isLoggedIn ? (
						<Home handleLogout={handleLogout} />
					) : (
						<SignIn handleLogin={handleLogin} />
					)
				}
			/>
			<Route path='/home' element={<Home handleLogout={handleLogout} />} />
			<Route path='/sign-in' element={<SignIn handleLogin={handleLogin} />} />
			<Route path='/sign-up' element={<SignUp />} />
			<Route path='/plaid-link' element={<PlaidLink />} />
		</Routes>
	);
};

export default RoutesComponent;
