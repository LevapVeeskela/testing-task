export interface Field {
	type: string;
	defaultValue?: string | number | ReadonlyArray<string> | undefined;
	name: string;
	required?: boolean;
	pattern?: string;
}
export interface FieldValue {
	name: string;
	value: string | number | ReadonlyArray<string> | undefined;
}

export interface FormCustom {
	fields?: Field[];
}