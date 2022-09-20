import { makeAutoObservable, autorun } from 'mobx';

import { LANGUAGE } from '../../constants';
import i18n, { getInitialLanguage } from '../../i18n';

export class CommonStore {
	language: string;
	isLoading: boolean;

	constructor() {
		makeAutoObservable(this);
		this.language = getInitialLanguage();
		this.isLoading = true;

		autorun(() => {
			localStorage.setItem(LANGUAGE, this.language);
		});
	}

	setLanguage(language: string): void {
		this.language = language;
		localStorage.setItem(LANGUAGE, language);
		i18n.changeLanguage(language)
	}

	setIsLoading(isLoading: boolean): void {
		this.isLoading = isLoading;
	}
}
