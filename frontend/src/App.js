import { useState } from 'react';
import './App.css';
import RoutesComponent from './navigation/RoutesComponent';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeContextProvider>
			<div className='App'>
				<RoutesComponent />
			</div>
		</ThemeContextProvider>
	);
}

export default App;
