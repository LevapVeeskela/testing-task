import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import Input from '../../../shared/components/input';
import { Field, FormCustom } from '../../../core/models/form';
import style from './style.module.scss';
import { observer } from 'mobx-react-lite';

const View: FC<FormCustom> = observer((props) => {
	const { fields } = props;
	const { t } = useTranslation();
	const formRef = useRef(null);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.currentTarget['FIRST_NAME'].value);
		console.log(e.currentTarget['SECOND_NAME'].value);
		// if (formRef.current && formRef.current['FIRST_NAME']) {
		// 	(formRef.current['FIRST_NAME'] as HTMLInputElement).value = 'wwww eeee';
		// }
		// if (formRef.current && formRef.current['SECOND_NAME']) {
		// 	(formRef.current['SECOND_NAME'] as HTMLInputElement).value = 'qqqqq';
		// }
	};

	return fields?.length ? (
		<form onSubmit={handleSubmit} ref={formRef} className={cx(style.form)}>
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
					/>
				</div>
			))}
			<input type="submit" value={t('FORM.BUTTONS.READY', '')} className={cx(style.button)} />
		</form>
	) : (
		t('FORM.ERRORS.SECOND_NAME.LABEL')
	);
});

export default View;
