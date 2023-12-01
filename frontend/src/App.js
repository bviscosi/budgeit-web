import { useState } from 'react';
import './App.css';
import RoutesComponent from './navigation/RoutesComponent';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './context/Theme';

function App() {
	const [mode, setMode] = useState('light'); // State to toggle between light and dark
	const theme = getTheme(mode);

	// Function to toggle the theme mode
	const toggleThemeMode = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<RoutesComponent />
			</div>
		</ThemeProvider>
	);
}

export default App;
