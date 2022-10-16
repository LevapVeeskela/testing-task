import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { Input, InputError } from './interface';
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
		maxlength,
		onChangeHandler,
		onCatchErrorHandler,
	} = props;

	const [error, setError] = useState<InputError>({ text: props.error });
	const { t } = useTranslation();

	useEffect(() => {
		const { path } = error;
		if (path) {
			const text = t(path);
			setError(() => ({ text, path }));
		}
	}, [props]);

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const isInCorrect = pattern && !new RegExp(pattern).test(value);
		const isRequired = (required && typeof value == 'undefined') || value == '';
		const isHaveError = isInCorrect || isRequired;
		let text = '';

		if (isInCorrect) {
			const path = 'FORM.ERRORS.INCORRECT';
			text = t(path);
			setError(() => ({ text, path }));
		}
		if (isRequired) {
			const path = 'FORM.ERRORS.REQUIRED';
			text = t(path);
			setError(() => ({ text, path }));
		}
		if (onCatchErrorHandler && text) {
			onCatchErrorHandler(value, name, text);
		}
		if (!isHaveError && onChangeHandler) {
			setError(() => ({ text: '' }));
			onChangeHandler(value, name, text);
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
				className={cx(inputClass, style.input, error?.text ? style.invalid : '')}
				required={required}
				pattern={pattern?.toString()}
				maxLength={maxlength}
				onChange={changeHandler}
			/>
			{error?.text && <div className={cx(style.error)}>{error?.text}</div>}
		</div>
	);
};

export default React.memo<Input>(
	View,
	(p, c) => p.label == c.label || p.placeholder == c.placeholder,
);
