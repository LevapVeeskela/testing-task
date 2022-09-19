export interface Input {
	label?: string;
	labelClass?: string;
	defaultValue?: string | number | ReadonlyArray<string> | undefined;
	type: string;
	name?: string;
	placeholder?: string;
	pattern?: string;
	required?: boolean;
	inputClass?: string;
	error?: string;
}
