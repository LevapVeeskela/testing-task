import { Field } from '../models/form';
import { FIRST_NAME, SECOND_NAME } from '.';

export const FIELDS_DATA: Field[] = [
	{
		type: 'text',
		name: FIRST_NAME,
		required: true,
	},
	{
		type: 'text',
		name: SECOND_NAME,
		required: true,
	},
];