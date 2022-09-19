import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './style.module.scss';

const View: FC = () => {
	const { t } = useTranslation();

	return <form>
		<label>
			{t('FORM.FIELDS.FIRST_NAME.LABEL')}:
			<input type="text" name="fist-name" placeholder={t('FORM.FIELDS.FIRST_NAME.PLACEHOLDER')} />
		</label>
		<label>
			{t('FORM.FIELDS.SECOND_NAME.LABEL')}:
			<input type="text" name="second-name" placeholder={t('FORM.FIELDS.SECOND_NAME.PLACEHOLDER')} />
		</label>
		<input type="submit" value={t('FORM.BUTTONS.READY')} />
	</form>;
}

export default View;