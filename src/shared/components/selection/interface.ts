export interface Option {
	value: string;
	label: string;
	selected?: boolean;
	disabled: boolean;
}

export interface Selection {
	selected?: Option;
	options: Option[];
	cb: (...args: any[]) => any;
	style?: { [key: string]: string };
}
