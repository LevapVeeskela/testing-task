import React, { FC, useState } from 'react';
import cx from 'classnames';
import { observer,  } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Option } from '../../../core/models';
import Selection from '../selection';
import { REPOSITORY, SPECIFICATION } from '../../../core/constants';
import { getLanguageOptions } from '../../../core/i18n';
import style from './style.module.scss';
import { useStores } from '../../../core/hooks/stores';

const View: FC = observer((): JSX.Element => {
	const { t } = useTranslation();
	const [languagesOptions, setLanguageOptions] = useState<Option[]>(getLanguageOptions());
	const { commonStore } = useStores();
	const changeLanguageHandler = (language: string) => {
		commonStore.setLanguage(language);
		setLanguageOptions(() => getLanguageOptions())
	};

	return (
		<header className={cx(style['header'])}>
			<div className={cx(style['menu'])}>
				<ul>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={REPOSITORY}
							title={t('HEADER.REPOSITORY_TITLE')}
						>
							{' '}
							{t('HEADER.REPOSITORY')}
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={SPECIFICATION}
							title={t('HEADER.SPECIFICATION_TITLE')}
						>
							{' '}
							{t('HEADER.SPECIFICATION')}
						</a>
					</li>
					<li className={cx(style.section)}>
						<Selection options={languagesOptions} cb={changeLanguageHandler} style={{ width: '60px' }} />
					</li>
				</ul>
			</div>
			<div className={cx(style['selection'])}></div>
		</header>
	);
});

export default View;
