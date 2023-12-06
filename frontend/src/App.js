import { useState } from 'react';
import './App.css';
import RoutesComponent from './navigation/RoutesComponent';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './context/Theme';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeContextProvider>
			{/* <ThemeProvider theme={theme}> */}
			<div className='App'>
				<RoutesComponent />
			</div>
			{/* </ThemeProvider> */}
		</ThemeContextProvider>
	);
}

export default App;
