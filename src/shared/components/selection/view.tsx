import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cx from 'classnames';
import { Selection } from './interface';
import { DEFAULT } from '../../../core/constants';
import style from './style.module.scss';
import { Option } from '../../../core/models';

const OptionFC: FC<Option> = (props) => (
	<option value={props.value} disabled={props.disabled}>
		{props.label}
	</option>
);

const View: FC<Selection> = observer((props): JSX.Element => {
	const [selectedOption, setSelectedOption] = useState<string>();
	const [options, setOptions] = useState<Option[]>(props.options);

	useEffect(() => {
		setOptions(() => props.options);
		const selectOption = { ...(props.options.find((o) => o.selected) || { value: DEFAULT }) };
		setSelectedOption(() => selectOption.value);
	}, props.options);

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setSelectedOption(value);
		props.cb(value);
	};

	return (
		<select
			value={selectedOption}
			onChange={selectChange}
			className={cx(style.select)}
			style={{ ...props.style }}
		>
			{options.filter(Boolean).map(({ value, label, disabled, selected }, index) => (
				<OptionFC key={value + index} value={value} label={label} disabled={disabled} selected={selected} />
			))}
		</select>
	);
});

export default View;
