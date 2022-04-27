import CharactersPage from "../Pages/CharactersPage";
import SeasonsPage from './../Pages/SeasonsPage';
import HomePage from './../Pages/HomePage';
import SingleCharacterPage from "../Pages/SingleCharacterPage";
import SingleEpisodePage from "../Pages/SingleEpisodePage";

export const routes = [

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
		component: <SingleCharacterPage />
	},
	{
		path: '/seasons/:id',
		exect: true,
		component: <SingleEpisodePage />
	}
]