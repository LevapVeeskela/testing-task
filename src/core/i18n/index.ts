import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, ru } from './languages';
import { getInitialLanguage } from '../helpers';

const resources = {
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

export default i18n;
