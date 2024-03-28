import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import { Footer } from '../../components/Footer/Footer';
import { useCustomTheme } from '../../utils/theme/ThemeContext';
import { Box, alpha } from '@mui/material';
import { landingPageContent } from '../../utils/assets';

const LandingPage = () => {
	const { mode } = useCustomTheme(); // Get the current mode from the context
	const dashboard = { landingPageContent };

	return (
		<Box
			id='hero'
			sx={(theme) => ({
				width: '100%',
				backgroundImage:
					theme.palette.mode === 'light'
						? 'linear-gradient(180deg, #e4f1fe, #FFF)'
						: `linear-gradient(#0e151d, ${alpha('#0e151d', 0.0)})`,
				backgroundSize: '100% 20%',
				backgroundRepeat: 'no-repeat',
			})}>
			<div>
				<Navbar />
				<Hero />
				<Box height={300} marginTop='20rem'></Box>
				<Footer />
			</div>
		</Box>
	);
};

export default LandingPage;
