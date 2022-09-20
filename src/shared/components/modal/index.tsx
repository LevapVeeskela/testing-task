import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../core/hooks/stores';
import View from './view';

const Container: FC = observer((): JSX.Element => {
	const { commonStore } = useStores();

	return (
		<>
			{commonStore.isOpenModal && commonStore.textModal && (
				<View onClose={() => commonStore.setModal(false, '')} text={commonStore.textModal} />
			)}
		</>
	);
});

export default Container;
