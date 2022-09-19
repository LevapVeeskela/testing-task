import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages';
import reportWebVitals from './reportWebVitals';
import './layout/global.scss'
import './core/i18n';

const rootNode: HTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
