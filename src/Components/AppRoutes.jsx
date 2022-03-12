import React from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { routes } from './../routes/index';
// import HomePage from './../Pages/HomePage';
// import EpisodsPage from './../Pages/EpisodsPage';
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
					path="*"
					element={<Navigate to="/home" />}
				/>
			</Routes >
			{/* <Navigate to='home' /> */}
		</>


	);
};

export default AppRoutes;