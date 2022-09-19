import React, { lazy } from 'react';

import {
	LOCATION_DEFAULT,
} from '../constants';

const Form = lazy(() => import('../../pages/testing-task/form'));

export const routes = [
	{
		component: <Form/>,
		location: LOCATION_DEFAULT,
	},
];
