import { requestCharacters, requestCharactersByIds, requestSingleCharacter, } from '../../../api/api';
import getRandomNums from '../../../assets/funcs/getRandomNums';
import {
	GET_CHARACTERS, SET_CHARACTERS,
	SET_ACTIVE_CHARACTER_FILTER,
	TOGGLE_IS_CHARACTERS_REDUCER_LOADING,
	SET_SINGLE_CHARACTER,
	TOGGLE_IS_CORRECT_CHARACTERS_PARAMS
} from './actions';

export const setCharacters = (characters, pages) => ({ characters, type: SET_CHARACTERS, pages })
export const toggleIsCharactersReducerLoading = (isLoading) => {
	return ({ isLoading, type: TOGGLE_IS_CHARACTERS_REDUCER_LOADING })
}
export const setActiveCharacterFilter = (filterBlockType, filter) => {
	return ({ filterBlockType, filter, type: SET_ACTIVE_CHARACTER_FILTER })
}
export const setSingleCharacter = (character) => ({ character, type: SET_SINGLE_CHARACTER })
const toggleIsCorrectCharactersParams = (isCorrect) => ({ isCorrect, type: TOGGLE_IS_CORRECT_CHARACTERS_PARAMS })

export const getCharacters = (page, gender = 'all', status = 'all', name = '') => {
	return async dispatch => {
		dispatch(toggleIsCharactersReducerLoading(true))

		let res = await requestCharacters(page, gender, status, name)

		if (res.status === 200) {
			dispatch(setCharacters(res.data.results, res.data.info.pages))
		} else {
			console.error("Thunk getCharacters doesn't work");
			dispatch(toggleIsCorrectCharactersParams(false))
		}
		dispatch(toggleIsCharactersReducerLoading(false))

	}
}

export const getCharactersByIds = (ids) => {
	return async dispatch => {
		dispatch(toggleIsCharactersReducerLoading(true))
		// const randNumbers = getRandomNums(count)
		const res = await requestCharactersByIds(ids);
		if (res.status === 200) {
			dispatch(toggleIsCharactersReducerLoading(false))
			return dispatch(setCharacters(res.data, 1))
		} else {
			console.error("Thunk getCharacters doesn't work");
		}
	}
}

export const getSingleCharacter = (id) => {
	return async dispatch => {
		dispatch(toggleIsCharactersReducerLoading(true))
		const res = await requestSingleCharacter(id)
		if (res.status === 200) {
			dispatch(toggleIsCharactersReducerLoading(false))
			return dispatch(setSingleCharacter(res.data))
		} else {
			console.error("Thunk getSingleCharacter doesn't work");

		}
	}
}
