import React, { FC, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import Input from '../../../shared/components/input';
import { Field, FormCustom } from '../../../core/models/form';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../core/hooks/stores';

import style from './style.module.scss';

const InputSumbit: FC = observer(() => {
	const { formStore } = useStores();
	const { t } = useTranslation();
	return (
		<input
			type="submit"
			value={t('FORM.BUTTONS.READY', '')}
			className={cx(style.button, formStore.isDisabled ? style.invalid : '')}
			disabled={formStore.isDisabled}
		/>
	);
});

const View: FC<FormCustom> = (props) => {
	const { formStore } = useStores();
	const { fields = [] } = props;
	const { t } = useTranslation();
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		formStore.onSumbit();
		for (const field of fields) {
			e.currentTarget[field.name].value = '';
		}
	};

	const changeHandler = useCallback((value: string, name: string) => {
		formStore.setField({ value, name });
		const fieldErrorIndex = formStore.fieldErrors.findIndex((f) => f.name == name);
		const isFillFields = fields.length == formStore.fieldValues.length;
		if (fieldErrorIndex != -1) {
			formStore.removeFieldErrorByIndex(fieldErrorIndex);
		}

		formStore.setIsDisabled(!!formStore.fieldErrors.length || !isFillFields);
	}, []);

	const catchErrorHandler = useCallback((value: string, name: string, error: string) => {
		const newFieldErrors = [
			...(formStore.fieldErrors.filter((f) => f.name != name) || []),
			{ value, name, error },
		];
		formStore.setIsDisabled(true);
		formStore.setFieldErrors(newFieldErrors);
	}, []);

	return fields?.length ? (
		<form onSubmit={handleSubmit} ref={formRef} className={cx(style.form)} noValidate>
			{fields.map(({ name, type, defaultValue, required, pattern, maxlength }: Field, index) => (
				<Input
					key={index}
					label={t(`FORM.FIELDS.${name}.LABEL`, '')}
					defaultValue={defaultValue}
					type={type}
					name={name}
					placeholder={t(`FORM.FIELDS.${name}.PLACEHOLDER`, '')}
					pattern={pattern}
					required={required}
					maxlength={maxlength}
					onChangeHandler={changeHandler}
					onCatchErrorHandler={catchErrorHandler}
				/>
			))}
			<InputSumbit />
		</form>
	) : (
			t('FORM.ERRORS.NOT_FIELDS')
	);
};

export default View;
