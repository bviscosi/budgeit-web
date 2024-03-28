import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import { Footer } from '../../components/Footer/Footer';
import { Box, alpha } from '@mui/material';

const LandingPage = () => {
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
			<Box>
				<Navbar />
				<Hero />
				<Box height={300} marginTop='20rem'></Box>
				<Footer />
			</Box>
		</Box>
	);
};

export default LandingPage;
