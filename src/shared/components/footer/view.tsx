import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { REPOSITORY } from '../../../core/constants';

const View: FC = (): JSX.Element => {
	const { t } = useTranslation();

	return (
		<footer className={cx(style['footer'])}>
			<div className={cx(style['menu'])}>
				<ul>
					<li><a target='_blank' rel="noopener noreferrer" href={REPOSITORY} title={t('HEADER.REPOSITORY_TITLE')} > {t('HEADER.REPOSITORY')}</a>
					</li>
					<li className={cx(style.section)}>
						<a target='_blank' rel="noopener noreferrer" href={REPOSITORY} title={t('HEADER.REPOSITORY_TITLE')} > {t('HEADER.REPOSITORY')}</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default View;
