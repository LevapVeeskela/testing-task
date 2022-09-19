import React, { FC } from 'react';
import { Field } from './interface';
import View from './view';

const fields: Field[] = [
	{
		type: 'text',
		name: 'FIRST_NAME',
		required: true
	},
	{
		type: 'text',
		name: 'SECOND_NAME',
		required: true
	},
];

const Container: FC = () => <View fields={fields} />;

export default Container;
