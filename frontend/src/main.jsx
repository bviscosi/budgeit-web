import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';
import { TransactionsProvider } from './context/TransactionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<BrowserRouter>
				<TransactionsProvider>
					<CssBaseline />
					<App />
				</TransactionsProvider>
			</BrowserRouter>
		</ThemeContextProvider>
	</React.StrictMode>
);
