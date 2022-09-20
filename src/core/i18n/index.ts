import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, ru } from './languages';
import { DEFAULT, LANGUAGE, RU } from '../constants';
import { Option } from '../models';

export const getInitialLanguage = (): string => localStorage.getItem(LANGUAGE) ?? RU;

export const resources = {
	en,
	ru,
};

i18n.use(initReactI18next).init({
	resources,
	lng: getInitialLanguage(),
	interpolation: {
		escapeValue: false,
	},
});

export const getLanguageOptions = () => [
	{ label: i18n.t('SELECTION.DEFAULT'), value: DEFAULT, selected: false, disabled: true } as Option,
	...Object.keys(resources).map((l) => ({ value: l, label: l.toString(), selected: false, disabled: false }))]
	.map(option => {
		option.selected = false;
		if (i18n.language == option.value) {
			option.selected = true;
		}
		return option
	});

export default i18n;
