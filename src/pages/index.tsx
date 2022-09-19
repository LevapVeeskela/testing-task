import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ROUTES } from '../core/constants';
import { RootStore } from '../core/stores';
import { StoreProvider } from '../core/stores/provider';
import View from './view';

const Container = () => {
	return (
		<HashRouter basename={ROUTES.default}>
			<StoreProvider store={new RootStore()}>
				<View />
			</StoreProvider>
		</HashRouter>
	);
};

export default Container;
