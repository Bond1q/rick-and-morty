// import CharactersPage from "../Pages/CharactersPage";
// import SeasonsPage from './../Pages/SeasonsPage';
import HomePage from './../Pages/HomePage';
import SingleCharacterPage from "../Pages/SingleCharacterPage";
import SingleEpisodePage from "../Pages/SingleEpisodePage";
import React, { Suspense } from "react";
import Loader from "../Components/Loader";
const SeasonsPage = React.lazy(() => import('../Pages/SeasonsPage'))
const CharactersPage = React.lazy(() => import('../Pages/CharactersPage'))
export const routes = [

	{
		path: '/characters/page=:pageNum',
		exact: true,
		search: '?gender=all&status=all&name=rick',
		component: <Suspense fallback={<Loader />}><CharactersPage /></Suspense>
	},
	{
		path: '/seasons',
		exact: true,
		component: <Suspense fallback={<Loader />}><SeasonsPage /></Suspense>
	},
	{
		path: '/home',
		exact: true,
		component: <HomePage />
	},
	{
		path: '/characters/:id',
		exect: true,
		component: <SingleCharacterPage />
	},
	{
		path: '/seasons/:id',
		exect: true,
		component: <SingleEpisodePage />
	}
]