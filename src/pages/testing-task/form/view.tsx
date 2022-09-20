import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import Input from '../../../shared/components/input';
import { Field, FieldError, FormCustom } from '../../../core/models/form';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../core/hooks/stores';
import style from './style.module.scss';
const View: FC<FormCustom> = observer((props) => {
	const { formStore } = useStores();
	const { fields = [] } = props;
	const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
	const [isDisabledButton, setIsDisabledButton] = useState(
		fields.length != formStore.fieldValues.length,
	);
	const { t } = useTranslation();
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		formStore.onSumbit();
		for (const field of fields) {
			e.currentTarget[field.name].value = '';
		}
		setFieldErrors([]);
		setIsDisabledButton(true);
	};

	const changeHandler = (value: string, name: string) => {
		formStore.setFields({ value, name });
		const fieldErrorIndex = fieldErrors.findIndex((f) => f.name == name);
		const isFillFields = fields.length == formStore.fieldValues.length;
		if (fieldErrorIndex != -1) {
			fieldErrors.splice(fieldErrorIndex, 1);
			setFieldErrors(fieldErrors);
		}

		setIsDisabledButton(!!fieldErrors.length || !isFillFields);
	};

	const catchErrorHandler = (value: string, name: string, error: string) => {
		const newFieldErrors = [
			...(fieldErrors.filter((f) => f.name != name) || []),
			{ value, name, error },
		];
		setIsDisabledButton(true);
		setFieldErrors(newFieldErrors);
	};

	return fields?.length ? (
		<form onSubmit={handleSubmit} ref={formRef} className={cx(style.form)} noValidate>
			{fields.map(({ name, type, defaultValue, required, pattern }: Field) => (
				<div key={name}>
					<Input
						label={t(`FORM.FIELDS.${name}.LABEL`, '')}
						defaultValue={defaultValue}
						type={type}
						name={name}
						placeholder={t(`FORM.FIELDS.${name}.PLACEHOLDER`, '')}
						pattern={pattern}
						required={required}
						onChangeHandler={changeHandler}
						onCatchErrorHandler={catchErrorHandler}
					/>
				</div>
			))}
			<input
				type="submit"
				value={t('FORM.BUTTONS.READY', '')}
				className={cx(style.button, isDisabledButton ? style.invalid : '')}
				disabled={isDisabledButton}
			/>
		</form>
	) : (
		t('FORM.ERRORS.SECOND_NAME.LABEL')
	);
});

export default View;
