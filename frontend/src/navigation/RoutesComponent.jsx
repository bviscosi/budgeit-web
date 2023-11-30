import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIncopy/SignIn';

const RoutesComponent = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/sign-in' element={<SignIn />} />
			<Route path='/sign-up' element={<SignUp />} />
		</Routes>
	);
};

export default RoutesComponent;
