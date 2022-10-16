export interface Input {
	label?: string;
	labelClass?: string;
	defaultValue?: string | number | ReadonlyArray<string> | undefined;
	type: string;
	name?: string;
	placeholder?: string;
	pattern?: RegExp | string;
	maxlength?: number;
	required?: boolean;
	inputClass?: string;
	error?: string;
	onChangeHandler?: (...arg: any) => any;
	onCatchErrorHandler?: (...arg: any) => any;
}

export interface InputError {
	text?: string;
	path?: string;
}
