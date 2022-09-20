import React, { FC, useState } from 'react';
import cx from 'classnames';

import style from './style.module.scss';
import { Input } from './interface';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

const View: FC<Input> = observer((props): JSX.Element => {
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
		setError('');
		const value = event.target.value;
		const isInCorrect = pattern && !new RegExp(pattern).test(value);
		const isRequired = (required && typeof value == 'undefined') || value == '';
		const isHaveError = isInCorrect || isRequired;
		if (isInCorrect) {
			setError(() => t('FORM.ERRORS.INCORRECT'));
		}
		if (isRequired) {
			setError(() => t('FORM.ERRORS.REQUIRED'));
		}
		if (!isHaveError && onChangeHandler) {
			onChangeHandler(value, name, error);
		}
		if (isHaveError && onCatchErrorHandler) {
			onCatchErrorHandler(value, name, error);
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
});

export default View;
