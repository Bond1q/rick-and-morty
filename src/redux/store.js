import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { charactersReducer } from './reducers/charactersReducer/charactersReducer';
import { seasonReducer } from './reducers/seasonsReducer/seasonReducer';

const reducers = combineReducers({
	charactersReducer,
	seasonReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))