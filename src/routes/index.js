import Characters from "../Pages/Characters";
import Episods from './../Pages/Episods';
import Home from './../Pages/Home';

export const routes = [
	{
		path: '/characters',
		exact: true,
		component: <Characters />
	},
	{
		path: '/episods',
		exact: true,
		component: <Episods />
	},
	{
		path: '/home',
		exact: true,
		component: <Home />
	},
]