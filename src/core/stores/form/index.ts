import { makeAutoObservable, autorun } from 'mobx';
import { FIELDS_DATA } from '../../constants';
import { Field, FieldValue } from '../../models/form';

export class FormStore {
	isLoading: boolean;
	fields: Field[];
	fieldValues: FieldValue[];

	constructor() {
		makeAutoObservable(this);
		this.fields = FIELDS_DATA;
		this.fieldValues = [];
		this.isLoading = true;

		autorun(() => {
			this.fields.forEach((field, index) => {
				const fieldValue = sessionStorage.getItem(field.name);
				if (fieldValue) {
					this.fields[index].defaultValue = fieldValue;
				}
			});
		});
	}

	setFields({ name, value }: FieldValue): void {
		if (value) {
			sessionStorage.setItem(name, value.toString());
			const fieldValueOldIndex = this.fieldValues.findIndex(
				(f) => f.name === name && f.value === value,
			);
			if (fieldValueOldIndex != -1) {
				this.fieldValues[fieldValueOldIndex].value = value;
			}
		}
	}

	setIsLoading(isLoading: boolean): void {
		this.isLoading = isLoading;
	}
}
