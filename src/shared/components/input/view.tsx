/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import React, { FC, useState } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { Input } from './interface';
import { useTranslation } from 'react-i18next';

const View = React.memo<Input>(
	(props): JSX.Element => {
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
			onChangeHandler,
			onCatchErrorHandler,
		} = props;

		const [error, setError] = useState(props.error);
		const { t } = useTranslation();
		const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			const isInCorrect = pattern && !new RegExp(pattern).test(value);
			const isRequired = (required && typeof value == 'undefined') || value == '';
			const isHaveError = isInCorrect || isRequired;
			let error = '';

			if (isInCorrect) {
				error = t('FORM.ERRORS.INCORRECT');
				setError(() => error);
			}
			if (isRequired) {
				error = t('FORM.ERRORS.REQUIRED');
				setError(() => error);
			}
			if (onCatchErrorHandler && error) {
				onCatchErrorHandler(value, name, error);
			}
			if (!isHaveError && onChangeHandler) {
				setError(() => '');
				onChangeHandler(value, name, error);
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
	},
	(p, c) => p.label != c.label,
);

export default View;
