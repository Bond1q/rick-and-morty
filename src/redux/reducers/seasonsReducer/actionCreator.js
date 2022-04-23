import { requestEpisode, requestSeasons } from "../../../api/api"
import { SET_ALL_SEASONS, TOGGLE_IS_SEASONS_REDUCER_LOADING, SET_EPISODE } from "./action"

const setAllSeasons = (seasons) => ({ type: SET_ALL_SEASONS, seasons })
const setEpisode = (episode) => ({ type: SET_EPISODE, episode })

export const toggleIsSeasonsReducerLoading = (isLoading) => ({ isLoading, type: TOGGLE_IS_SEASONS_REDUCER_LOADING })
export const getAllSeasons = () => {
	return async dispatch => {
		dispatch(toggleIsSeasonsReducerLoading(true))
		const results = await requestSeasons()
		const seasons = []
		let seasonIndex, episodeIndex, title, elemIndexInArr = 0;
		results.forEach(res => {
			res.data.results.forEach(item => {
				seasonIndex = +(item.episode.replace(/[^0-9]/g, '').slice(0, 2))
				episodeIndex = +(item.episode.replace(/[^0-9]/g, '').slice(2, 4))
				title = item.name
				if (seasons.filter(season => season.seasonIndex === seasonIndex).length === 0) {
					elemIndexInArr = seasons.length;
					seasons.push({ seasonIndex, episodes: [{ episodeIndex, title, id: item.id }] })
				} else {
					seasons[elemIndexInArr].episodes.push({ episodeIndex, title, id: item.id })
				}
			})
		})
		dispatch(toggleIsSeasonsReducerLoading(false))
		dispatch(setAllSeasons(seasons))
	}
}

export const getEpisode = (episodeId) => {
	return async dispatch => {
		dispatch(toggleIsSeasonsReducerLoading(true))
		const result = await requestEpisode(episodeId)
		dispatch(toggleIsSeasonsReducerLoading(false))

		if (result.status == 200) {
			dispatch(setEpisode(result.data))
		}
	}
}