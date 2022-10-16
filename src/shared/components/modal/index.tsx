import React, { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../core/hooks/stores';
import View from './view';

const Container: FC = observer((): JSX.Element => {
	const { commonStore } = useStores();
	const onClose = useCallback(() => commonStore.setModal(false, ''), []);

	return (
		<>
			{commonStore.isOpenModal && commonStore.textModal && (
				<View onClose={onClose} text={commonStore.textModal} />
			)}
		</>
	);
});

export default Container;
