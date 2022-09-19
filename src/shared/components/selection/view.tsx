import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { Selection, Option } from './interface';
import { DEFAULT } from '../../../core/constants';

const OptionFC: FC<Option> = (props) => {
	return (<option value={props.value} disabled={props.disabled} >
		{props.label}
	</option>)
}

const View: FC<Selection> = (props): JSX.Element => {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState<string>();
	const [options, setOptions] = useState<Option[]>([
		{ label: t('SELECTION.DEFAULT'), value: DEFAULT, selected: false, disabled: true } as Option,
		...props.options,
	]);

	useEffect(() => {
		const selectOption = props.options.find((o) => o.selected);
		setSelectedOption(selectOption?.value)
		if (!selectOption) {
			options[0].selected = true;
			setOptions(options);
		}
	}, props.options);

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setSelectedOption(value);
		props.cb(value);
	};

	return (
		<select value={selectedOption} onChange={selectChange} className={cx(style.select)} style={{ ...props.style }}>
			{options.filter(Boolean).map(({ value, label, disabled }, index) => (
				<OptionFC key={value + index} value={value} label={label} disabled={disabled} />
			))}
		</select>
	);
};

export default View;
