import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';

const View: FC = (): JSX.Element => {
	return (
		<div className={cx(style['lds-hourglass'])}></div>
	);
};

export default View;
