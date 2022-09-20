import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { MY_LINKEDIN, MY_PHOTO_LINKEDIN } from '../../../core/constants';

const View: FC = (): JSX.Element => {
	const { t } = useTranslation();

	const imageClickHandler = (): void => {
		window.open(MY_LINKEDIN, "_blank");
	}

	return (	
		<footer className={cx(style['footer'])}>
			<div className={cx(style['menu'])}>
				<ul>
					<li>
						<img src={MY_PHOTO_LINKEDIN} alt="my linkedin" onClick={imageClickHandler} className={cx(style['image_linkedin'])} />
					</li>
					<li>
						<span>
							{t('DESCRIPTION.STACK')}
						</span>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default View;
