import { useContext } from 'react';

import { RootStore } from '../../stores';
import { StoreContext } from '../../stores/provider';

export const useStores = (): RootStore => useContext(StoreContext);
