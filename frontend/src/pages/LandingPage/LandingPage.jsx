import { useState } from 'react';

import { Box, alpha } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import MobileNavbar from '../../components/Navbar/MobileNavbar';
import { Footer } from '../../components/Footer/Footer';

import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';

const LandingPage = () => {
	const theme = useTheme();
	const [openMenu, setOpenMenu] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<Box
			id='hero'
			sx={(theme) => ({
				width: '100%',
				backgroundImage:
					theme.palette.mode === 'light'
						? 'linear-gradient(180deg, #e4f1fe, #FFF)'
						: `linear-gradient(#0f0c15, ${alpha('#0f0c15', 0.1)})`,
				backgroundSize: '100% 20%',
				backgroundRepeat: 'no-repeat',
			})}>
			<Box>
				<Navbar setOpenMenu={setOpenMenu} />
				{openMenu ? (
					<MobileNavbar setOpenMenu={setOpenMenu}></MobileNavbar>
				) : (
					<Box>
						<Hero />
						<Highlights />
						<Features />
						<Testimonials />
						<Pricing />
						<FAQ />
						<Footer />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default LandingPage;
