import { makeAutoObservable, autorun } from 'mobx';
import { FIELDS_DATA, FIRST_NAME, SECOND_NAME } from '../../constants';
import { Field, FieldError, FieldValue } from '../../models/form';
import { CommonStore } from '../common';
import { t } from 'i18next';

export class FormStore {
	isLoading: boolean;
	fields: Field[];
	fieldValues: FieldValue[];
	fieldErrors: FieldError[];
	isDisabled: boolean;
	commonStore: CommonStore;

	constructor(commonStore: CommonStore) {
		makeAutoObservable(this);
		this.fields = FIELDS_DATA;
		this.fieldValues = [];
		this.fieldErrors = [];
		this.isLoading = this.isDisabled = true;
		this.commonStore = commonStore;
		autorun(() => {
			this.fields.forEach((field, index) => {
				const fieldValue = sessionStorage.getItem(field.name);
				if (fieldValue) {
					this.fields[index].defaultValue = fieldValue;
					this.fieldValues.push({ name: field.name, value: fieldValue });
				}
			});
			this.isDisabled = this.fields.length != this.fieldValues.length;
		});
	}

	setFields({ value, name }: FieldValue): void {
		const fieldValueOldIndex = this.fieldValues.findIndex((f) => f.name === name);
		if (name && !value && fieldValueOldIndex != -1) {
			this.fieldValues.splice(fieldValueOldIndex, 1);
			return;
		}
		if (value) {
			sessionStorage.setItem(name, value.toString());
			if (fieldValueOldIndex != -1) {
				this.fieldValues[fieldValueOldIndex].value = value;
				return;
			}
			this.fieldValues.push({ value, name });
		}
	}

	setFieldErrors(fieldErrors: FieldError[]): void {
		this.fieldErrors = fieldErrors;
	}

	setIsDisabled(isDisabled: boolean): void {
		this.isDisabled = isDisabled;
	}

	// #region for testing task only
	onSumbit(): void {
		const firstName = this.fieldValues.find((f) => f.name == FIRST_NAME)?.value;
		const secondName = this.fieldValues.find((f) => f.name == SECOND_NAME)?.value;
		if (firstName && secondName) {
			this.commonStore.setModal(true, t('MODAL.WELCOM', { firstName, secondName }));
		}
		this.fieldValues.forEach((f) => sessionStorage.removeItem(f.name));
		this.fieldValues = [];
	}
	// #endregion
}
