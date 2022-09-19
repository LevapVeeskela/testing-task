import React, { lazy } from 'react';

import {
	LOCATION_DEFAULT,
} from '../constants';

// const Form = lazy(() => import('../../pages/testing-task/form'));

const Form = lazy(() => {
	return Promise.all([
		import('../../pages/testing-task/form'),
		new Promise(resolve => setTimeout(resolve, 1000)) // чисто для красоты, имитация загрузки с сервера
	])
		.then(([moduleExports]) => moduleExports);
}); 

export const routes = [
	{
		component: <Form/>,
		location: LOCATION_DEFAULT,
	},
];
