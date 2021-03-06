import React from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { routes } from './../routes/index';
import Header from './Header';

const AppRoutes = () => {
	return (
		<>
			<Header />

			<Routes  >
				{routes.map(({ path, exact, component }) => {
					return <Route key={path} path={path} exact={exact} element={component} />
				})}
				<Route
					path="/characters"
					exact={true}
					element={<Navigate to="/characters/page=1" />}
				/>
				<Route
					path="*"
					element={<Navigate to="/home" />}
				/>
			</Routes >
		</>


	);
};

export default AppRoutes;