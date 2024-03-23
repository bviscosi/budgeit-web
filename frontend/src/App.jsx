import React from 'react';
import './App.css';
import RoutesComponent from './navigation/RoutesComponent';
import { ThemeContextProvider } from './utils/theme/ThemeContext';

function App() {
	return (
		<React.StrictMode>
			<ThemeContextProvider>
				<div className='App'>
					<RoutesComponent />
				</div>
			</ThemeContextProvider>
		</React.StrictMode>
	);
}

export default App;
