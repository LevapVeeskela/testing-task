import React, { FC } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { Option } from '../selection/interface';
import { resources } from '../../../core/i18n';
import Selection from '../selection';



const View: FC = (): JSX.Element => {
	const { i18n } = useTranslation();
	const languages: Option[] = Object.keys(resources).map((l) => {
		const option: Option = { value: l, label: l.toString(), selected: false, disabled: false };
		if (i18n.language === l) {
			option.selected = true;
		}
		return option;
	});
	const changeLanguageHandler = (language: string) => i18n.changeLanguage(language);

	return (
		<header className={cx(style['header'])}>
			<div className={cx(style['selection'])}>
				<Selection options={languages} cb={changeLanguageHandler} />
			</div>
		</header>
	);
};

export default View;
