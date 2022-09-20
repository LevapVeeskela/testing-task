import { Option } from '../../../core/models';

export interface Selection {
	selected?: Option;
	options: Option[];
	cb: (...args: any[]) => void;
	style?: { [key: string]: string };
}
