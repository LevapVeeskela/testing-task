import { makeAutoObservable, autorun } from 'mobx';

import { LANGUAGE } from '../../constants';
import { getInitialLanguage } from '../../helpers';

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
	}

	setIsLoading(isLoading: boolean): void {
		console.log('setIsLoading store:', isLoading)
		this.isLoading = isLoading;
	}
}
