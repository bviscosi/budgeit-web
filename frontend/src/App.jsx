import React from 'react';
import './App.css';
import RoutesComponent from './utils/navigation/RoutesComponent';
import { ThemeContextProvider } from './utils/theme/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<div className='App'>
					<RoutesComponent />
				</div>
			</BrowserRouter>
		</ThemeContextProvider>
	);
}

export default App;
