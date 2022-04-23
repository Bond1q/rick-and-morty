import { SET_ALL_SEASONS, SET_EPISODE, TOGGLE_IS_SEASONS_REDUCER_LOADING } from './action';

const initialState = {
	seasons: [
		{
			seasonIndex: 0, episodes: [
				{ episodeIndex: 1, title: '', id: 1 },

			]
		}
	],
	episode: {
		name: '',
		seasonIndex: 1,
		episodeIndex: 1,
		characters: [],
		id: 1

	},
	isLoading: true
}

export const seasonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALL_SEASONS:
			return { ...state, seasons: action.seasons }

		case TOGGLE_IS_SEASONS_REDUCER_LOADING:
			return { ...state, isLoading: action.isLoading }

		case SET_EPISODE:
			const newSeasonIndex = +(action.episode.episode.replace(/[^0-9]/g, '').slice(0, 2))
			const newEpisoseIndex = +(action.episode.episode.replace(/[^0-9]/g, '').slice(2, 4))
			const charactersList = action.episode.characters.map(character => {
				return +(character.split("/").reverse()[0])
			})

			const newEpisode = {
				seasonIndex: newSeasonIndex,
				episodeIndex: newEpisoseIndex,
				characters: charactersList,
				id: action.episode.id,
				name: action.episode.name
			}
			return { ...state, episode: newEpisode }

		default:
			return { ...state }
	}
}

