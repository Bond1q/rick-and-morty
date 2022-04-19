import { SET_ALL_SEASONS, TOGGLE_IS_SEASONS_REDUCER_LOADING } from './action';

const initialState = {
	seasons: [
		{
			seasonIndex: 0, episodes: [
				{ episodeIndex: 1, title: '' },

			]
		}
	],
	isLoading: true
}

export const seasonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALL_SEASONS:

			return { ...state, seasons: action.seasons }
		case TOGGLE_IS_SEASONS_REDUCER_LOADING:
			return { ...state, isLoading: action.isLoading }
		default:
			return { ...state }
	}
}

