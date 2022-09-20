import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';

const View: FC<{ onClose: () => void, text: string }> = ({ onClose, text }): JSX.Element => {	
	return (
		<div
			className={cx(style['container'])}
		>
			<p className={cx(style['close_btn'])} onClick={onClose}>
				X
			</p>
			<p className={cx(style['content'])}>
				{text}
			</p>
		</div>
	);
};
export default View;
