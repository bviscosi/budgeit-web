import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import { Footer } from '../../components/Footer/Footer';
import { useCustomTheme } from '../../utils/theme/ThemeContext';
import { Box } from '@mui/material';
import { landingPageContent } from '../../utils/assets';

const LandingPage = () => {
	const { mode } = useCustomTheme(); // Get the current mode from the context
	const dashboard = { landingPageContent };

	return (
		<div
			style={{
				background:
					mode === 'dark'
						? // ? 'linear-gradient(145deg, rgba(38,24,62,1) 0%, rgba(0,30,38,1) 67%, rgba(2,10,18,1) 100%)'
						  '#070707'
						: 'linear-gradient(60deg, rgba(223,215,237,1) 0%, rgba(231,250,255,1) 67%, rgba(255,255,255,1) 100%)',
			}}>
			<Navbar />
			<Hero />
			<Box height={300} marginTop='20rem'></Box>
			<Footer />
		</div>
	);
};

export default LandingPage;
