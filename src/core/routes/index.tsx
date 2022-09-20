import React, { lazy } from 'react';

import {
	LOCATION_DEFAULT,
} from '../constants';
import { RootStore } from '../stores';

// const Form = lazy(() => import('../../pages/testing-task/form')); // ориджин

const Form = lazy(() => {
	return Promise.all([
		import('../../pages/testing-task/form'),
		new Promise(resolve => setTimeout(resolve, 1000)) // чисто для красоты, имитация загрузки из сервера
	])
		.then(([moduleExports]) => {
			RootStore.lastInstantce.commonStore.setIsLoading(false);
			return moduleExports;
		});
}); 

export const routes = [
	{
		component: <Form/>,
		location: LOCATION_DEFAULT,
	},
];
