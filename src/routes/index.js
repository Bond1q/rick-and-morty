import CharactersPage from "../Pages/CharactersPage";
import SeasonsPage from './../Pages/SeasonsPage';
import HomePage from './../Pages/HomePage';
import CharacterPage from "../Pages/CharacterPage";

export const routes = [
	// {
	// 	path: '/characters',
	// 	exact: true,
	// 	component: <CharactersPage />
	// },
	{
		path: '/characters/page=:pageNum',
		exact: true,
		search: '?gender=all&status=all&name=rick',
		component: <CharactersPage />
	},
	{
		path: '/seasons',
		exact: true,
		component: <SeasonsPage />
	},
	{
		path: '/home',
		exact: true,
		component: <HomePage />
	},
	{
		path: '/characters/:id',
		exect: true,
		component: <CharacterPage />
	}
]