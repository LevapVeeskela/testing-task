import React, { Suspense, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import cx from 'classnames';

import style from './style.module.scss';
import { routes } from '../../../core/routes';
import Loader from '../loader';
import Modal from '../modal';

const View: FC = (): JSX.Element => {
	return (
		<main className={cx(style.content)}>
			<Suspense fallback={<Loader />}>
				<Routes>
					{routes.map((item) => {
						return (
							<Route
								key={item.location.pathname}
								path={item.location.pathname}
								element={item.component}
							></Route>
						);
					})}
				</Routes>
				<Modal />
			</Suspense>
		</main>
	);
};

export default View;
