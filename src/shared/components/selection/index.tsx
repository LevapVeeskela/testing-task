import React, { FC } from 'react';
import View from './view';
import { Selection } from './interface';

const Container: FC<Selection> = (props): JSX.Element => <View {...props} />

export default Container;
