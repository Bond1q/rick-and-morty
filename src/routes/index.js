import CharactersPage from "../Pages/CharactersPage";
import EpisodsPage from './../Pages/EpisodsPage';
import HomePage from './../Pages/HomePage';

export const routes = [
	{
		path: '/characters',
		exact: true,
		component: <CharactersPage />
	},
	{
		path: '/episods',
		exact: true,
		component: <EpisodsPage />
	},
	{
		path: '/home',
		exact: true,
		component: <HomePage />
	},
]