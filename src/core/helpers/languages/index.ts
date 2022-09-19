import { LANGUAGE, RU } from '../../constants';

export const getInitialLanguage = (): string =>
	localStorage.getItem(LANGUAGE) ?? RU;