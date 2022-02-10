import React from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { routes } from './../routes/index';
// import Home from './../Pages/Home';
// import Episods from './../Pages/Episods';
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