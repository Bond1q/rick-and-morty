import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterContainer from './Filters/FilterContainer';
import { preventMainFunc } from '../assets/funcs/preventMainFunc';
import propTypes from 'prop-types';
import getDataFromFilters from './../assets/funcs/getDataFromFilters';
import { setActiveCharacterFilter, getCharacters } from '../redux/reducers/charactersReducer/actionCreators';
const CharactersFilterController = ({ filters, isFilterTabActive,
	setIsFilterTabActive, gender, name, status,
	searchName, currentPage, changeUrl,
	setCurrentPage, setSearchName, setIsFilterClicked, isFilterClicked
}) => {
	const dispatch = useDispatch();



	const [filtersToProps, activeGender, activeStatus] = getDataFromFilters(filters)

	const setActiveFilterChanged = (filterBlockType, filter) => {
		let isDispatch = true
		if (filterBlockType === 'gender') {
			isDispatch = activeGender !== filter
		} else {
			isDispatch = activeStatus !== filter
		}
		if (isDispatch) {

			dispatch(setActiveCharacterFilter(filterBlockType, filter))
		}
	}

	useEffect(() => {
		if (gender !== activeGender) {
			dispatch(setActiveCharacterFilter('gender', gender))
			dispatch(getCharacters(currentPage, gender, status, name))
		}
		if (status !== activeStatus) {
			dispatch(setActiveCharacterFilter('status', status))
			dispatch(getCharacters(currentPage, gender, status, name))
		}
		if (gender !== activeGender) {
			dispatch(setActiveCharacterFilter('gender', gender))
			dispatch(getCharacters(currentPage, gender, status, name))
		}
		if (name) {
			setSearchName(name)
			dispatch(getCharacters(currentPage, gender, status, name))
		}
	}, [gender, name, status])

	useEffect(() => {
		if (isFilterClicked) {
			setCurrentPage(1)
			dispatch(getCharacters(1, activeGender, activeStatus, searchName))
			changeUrl(1, activeGender, activeStatus, searchName)
			setIsFilterClicked(false)
		}
	}, [isFilterClicked])
	return (
		<>
			<FilterContainer
				isFilterTabActive={isFilterTabActive}
				setIsFilterTabActive={setIsFilterTabActive}
				filters={filtersToProps}
				setActiveFilterChanged={setActiveFilterChanged}
				onFilterClicked={setIsFilterClicked}
			/>
		</>
	);
};
// Search.propTypes = {
// 	placeholderText: propTypes.string,
// 	searchDefaultValue: propTypes.string,
// 	setSearchName: propTypes.func,
// 	onFilterClicked: propTypes.func


// }


export default CharactersFilterController;