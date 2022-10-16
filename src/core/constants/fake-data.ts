import { Field } from '../models/form';
import { FIRST_NAME, SECOND_NAME } from '.';

const textRegExp = /[^\d\s]{1,32}/gi;

export const FIELDS_DATA: Field[] = [
	{
		type: 'text',
		name: FIRST_NAME,
		pattern: textRegExp,
		maxlength: 32,
		required: true,
	},
	{
		type: 'text',
		name: SECOND_NAME,
		pattern: textRegExp,
		maxlength: 32,
		required: true,
	},
];
