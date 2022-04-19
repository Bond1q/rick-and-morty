import { requestSeasons } from "../../../api/api"
import { SET_ALL_SEASONS, TOGGLE_IS_SEASONS_REDUCER_LOADING } from "./action"

const setAllSeasons = (seasons) => ({ type: SET_ALL_SEASONS, seasons })
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
					seasons.push({ seasonIndex, episodes: [{ episodeIndex, title }] })
				} else {
					seasons[elemIndexInArr].episodes.push({ episodeIndex, title })
				}
			})
		})
		dispatch(toggleIsSeasonsReducerLoading(false))
		dispatch(setAllSeasons(seasons))
	}
}