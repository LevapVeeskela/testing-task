import React, { FC, useState } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { Input } from './interface';
import { useTranslation } from 'react-i18next';

const View: FC<Input> = (props): JSX.Element => {
	const {
		label,
		labelClass,
		defaultValue,
		type,
		name,
		placeholder,
		inputClass,
		required,
		pattern,
	} = props;
	const [error, setError] = useState(props.error);
	const { t } = useTranslation();
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setError('');
		if (pattern && !new RegExp(pattern).test(event.target.value)) {
			setError(t('FORM.ERRORS.INCORRECT'));
		}
		if ((required && typeof event.target.value == 'undefined') || event.target.value == '') {
			setError(t('FORM.ERRORS.REQUIRED'));
		}
	};

	return (
		<div>
			{label && (
				<label htmlFor={name} className={cx(labelClass, style.label)}>
					{label}:
				</label>
			)}
			<input
				id={name}
				defaultValue={defaultValue}
				type={type}
				name={name}
				placeholder={placeholder}
				className={cx(inputClass, style.input, error ? style.invalid : '')}
				required={required}
				pattern={pattern}
				onChange={changeHandler}
			/>
			{error && <div className={cx(style.error)}>{error}</div>}
		</div>
	);
};

export default View;
