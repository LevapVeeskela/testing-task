import React, { FC } from 'react';
import { Input } from './interface';

import View from './view';

const Container: FC<Input> = (props): JSX.Element => (<View {...props} />);

export default Container;
