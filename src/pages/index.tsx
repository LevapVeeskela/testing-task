import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ROUTES } from '../core/constants';
import View from './view';

const Container = () => {
	return (
		<HashRouter basename={ROUTES.default}>
			<View />
		</HashRouter>
	);
}

export default Container;
