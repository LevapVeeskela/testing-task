import React, { FC } from 'react';
import cx from 'classnames';
import { Field } from './interface';
import View from './view';
import style from './style.module.scss';

const fields: Field[] = [
	{
		type: 'text',
		name: 'FIRST_NAME',
		required: true,
	},
	{
		type: 'text',
		name: 'SECOND_NAME',
		required: true,
	},
];

const Container: FC = () => (
	<div className={cx(style.container)}>
		<View fields={fields} />
	</div>
);

export default Container;
