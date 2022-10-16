export interface Field {
	type: string;
	defaultValue?: string | number | ReadonlyArray<string> | undefined;
	name: string;
	maxlength: number;
	required?: boolean;
	pattern?: RegExp | string;
}
export interface FieldValue {
	name: string;
	value: string | number | ReadonlyArray<string> | undefined;
}

export type FieldError = FieldValue & { error: string };

export interface FormCustom {
	fields?: Field[];
}
