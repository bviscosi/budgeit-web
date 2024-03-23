import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import { Footer } from '../../components/Footer/Footer';

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Footer />
		</div>
	);
};

export default LandingPage;
