import React, { FC } from 'react';
import Main from '../shared/components/main';
import Header from '../shared/components/header';
import Footer from '../shared/components/footer';

const View: FC = () => (
	<>
		<Header />
		<div className="container">
			<Main />
		</div>
		<Footer />{' '}
	</>
);

export default View;
