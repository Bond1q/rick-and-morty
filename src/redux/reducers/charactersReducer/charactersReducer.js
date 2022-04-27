
// import './actionCreators'
import { SET_CHARACTERS, SET_ACTIVE_CHARACTER_FILTER, TOGGLE_IS_CHARACTERS_REDUCER_LOADING, TOGGLE_IS_CORRECT_CHARACTERS_PARAMS } from './actions';
// import { SET_ACTIVE_CHARACTER_FILTER } from './actions';
import { SET_SINGLE_CHARACTER } from './actions';

const initialState = {
	filters: {
		gender: [
			{ type: 'all', isActive: true },
			{ type: 'male', isActive: false },
			{ type: 'female', isActive: false },
			{ type: 'genderless', isActive: false },
			{ type: 'unknown', isActive: false },
		],
		status: [
			{ type: 'all', isActive: true },
			{ type: 'alive', isActive: false },
			{ type: 'dead', isActive: false },
			{ type: 'unknown', isActive: false },
		]
	},
	characters: [
		{
			id: 1,
			name: "Rick Sanchez",
			status: "Alive",
			species: "Human",
			gender: "Male",
			origin: "Earth",
			image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
			episode: 1,
		}
	],
	pages: 1,
	isLoading: true,
	isCorrectParams: true,
	singleCharacter: {
		name: '',
		status: '',
		species: '',
		origin: '',
		type: '',
		gender: '',
		location: '',
		image: '',
		episode: []

	}



}

export const charactersReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_CHARACTERS:
			const updateCharacters = action.characters.map(character => {
				const { id, name, status, type, species, gender, image } = character
				const episode = +character.episode[0].split('/').reverse()[0]
				const origin = character.origin.name
				const newCharacter = { id, name, status, type, species, gender, origin, image, episode }
				return newCharacter
			})

			return {
				...state,
				characters: updateCharacters,
				pages: action.pages,
				isCorrectParams: true
			}

		case SET_ACTIVE_CHARACTER_FILTER:
			let filterBlock = action.filterBlockType.toLowerCase() === 'gender' ? state.filters.gender : state.filters.status;
			let filterBlockNewItems = filterBlock.map(filter => {
				if (filter.type === action.filter) {
					filter.isActive = true;
				} else {
					filter.isActive = false
				}
				return filter
			})
			return { ...state, filters: { ...state.filters, [`${action.filterBlockType}`]: filterBlockNewItems }, isCorrectParams: true }

		case SET_SINGLE_CHARACTER:
			const { id, name, status, species, type, gender, image, episode } = action.character
			const origin = action.character.origin.name
			const location = action.character.origin.location
			const newCharacter = { id, name, status, species, type, gender, image, episode, origin, location }
			return { ...state, singleCharacter: newCharacter, isCorrectParams: true }

		case TOGGLE_IS_CHARACTERS_REDUCER_LOADING:
			return { ...state, isLoading: action.isLoading }
		case TOGGLE_IS_CORRECT_CHARACTERS_PARAMS:
			return { ...state, isCorrectParams: action.isCorrect }
		default:
			return { ...state }
	}
}