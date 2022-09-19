import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import View from './view';

const Container: FC = (): JSX.Element => (
	<div className={cx(style.container)}>
		<View />
	</div>

);

export default Container;
