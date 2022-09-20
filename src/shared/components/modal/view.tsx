import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';

const View: FC<{ onClose: () => void, text: string }> = ({ onClose, text }): JSX.Element => {	
	return (
		<div
			className={cx(style['container'])}
		>
			<span className={cx(style['close_btn'])} onClick={onClose}>
				X
			</span>
			<div className={cx(style['content'])}>
				{text}
			</div>
		</div>
	);
};
export default View;
