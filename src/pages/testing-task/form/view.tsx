import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import Input from '../../../shared/components/input';
import { Field, FormCustom } from '../../../core/models/form';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../core/hooks/stores';
import style from './style.module.scss';

const View: FC<FormCustom> = observer((props) => {
	const { formStore } = useStores();
	const { fields = [] } = props;
	const [isDisabledButton, setIsDisabledButton] = useState(fields.length != formStore.fieldValues.length);
	const { t } = useTranslation();
	const formRef = useRef<HTMLFormElement>(null);
	useEffect(() => {
		console.log('что-то поменялось')
	}, [props])
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		formStore.onSumbit();
		for (const field of fields) {
			e.currentTarget[field.name].value = ''
		}
		setIsDisabledButton(true);
	}

	const changeHandler = (value: string, name: string) => {
		formStore.setFields({ value, name });
		console.log('что-то ввёл', { value, name })
		// console.log(formStore.fieldValues)
		// console.log(fields.length == formStore.fieldValues.length)
		if (fields.length == formStore.fieldValues.length) {
			setIsDisabledButton(false);
		}
	}

	const catchErrorHandler = (value: string, name: string, error: string) => {
		console.info(name, error);
		setIsDisabledButton(true);
	}

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
			<input type="submit" value={t('FORM.BUTTONS.READY', '')} className={cx(style.button, isDisabledButton ? style.invalid : '')} disabled={isDisabledButton} />
		</form>
	) : (
		t('FORM.ERRORS.SECOND_NAME.LABEL')
	);
});

export default View;
