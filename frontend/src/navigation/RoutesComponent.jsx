import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';

const RoutesComponent = ({ toggleThemeMode }) => {
	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='/home' element={<Home toggleThemeMode={toggleThemeMode} />} />
			<Route path='/sign-in' element={<SignIn />} />
			<Route path='/sign-up' element={<SignUp />} />
		</Routes>
	);
};

export default RoutesComponent;
