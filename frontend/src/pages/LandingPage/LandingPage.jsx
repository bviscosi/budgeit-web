import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import { Footer } from '../../components/Footer/Footer';
import { Box, alpha } from '@mui/material';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import MobileNavbar from '../../components/Navbar/MobileNavbar';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

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
