import React, { FC } from 'react';
import cx from 'classnames';
import View from './view';
import style from './style.module.scss';
import { useStores } from '../../../core/hooks/stores';

const Container: FC = (): JSX.Element => {
	const { formStore } = useStores();

	return (
		<div className={cx(style.container)}>
			<View fields={formStore.fields} />
		</div>
	);
};

export default Container;
