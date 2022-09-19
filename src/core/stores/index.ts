import { CommonStore } from './common';
import { FormStore } from './form';

export type RootStoreType = typeof RootStore;
export class RootStore {
	static lastInstantce: RootStore;
	commonStore: CommonStore;
	formStore: FormStore;

	constructor() {
		this.commonStore = new CommonStore();
		this.formStore = new FormStore();
		RootStore.lastInstantce = this;
	}
}
