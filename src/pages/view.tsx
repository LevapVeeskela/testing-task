import React, { FC } from 'react';
import Main from '../shared/components/main';
import Header from '../shared/components/header'

const View: FC = () => (
	<>
		<Header></Header>
		<div className="container">
			<Main />
		</div>
	</>

);

export default View;
