import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import Input from '../../../shared/components/input';
import { Field, FormCustom } from '../../../core/models/form';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../core/hooks/stores';
import style from './style.module.scss';

const View: FC<FormCustom> = observer((props) => {
	const [isDisabledButton, setIsDisabledButton] = useState(false);
	const { formStore } = useStores();
	const { fields = [] } = props;
	const { t } = useTranslation();
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('handleSubmit', fields.length == formStore.fieldValues.length)
		console.log('handleSubmit', fields)
		console.log('handleSubmit', formStore.fieldValues)
		formStore.onSumbit();
	}

	const changeHandler = (value: string, name: string) => {
		formStore.setFields({ value, name });
		console.log('changeHandler', fields.length == formStore.fieldValues.length)
		if (fields.length == formStore.fieldValues.length) {
			setIsDisabledButton(false);
		}
	}

	const catchErrorHandler = (value: string, name: string, error: string) => {
		console.info(name, error);
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
			<input type="submit" value={t('FORM.BUTTONS.READY', '')} className={cx(style.button)} disabled={isDisabledButton} />
		</form>
	) : (
		t('FORM.ERRORS.SECOND_NAME.LABEL')
	);
});

export default View;
