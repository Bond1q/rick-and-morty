import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterContainer from './Filters/FilterContainer';
import propTypes from 'prop-types';
import getDataFromFilters from './../assets/funcs/getDataFromFilters';
import { setActiveCharacterFilter, getCharacters } from '../redux/reducers/charactersReducer/actionCreators';
import useDataFromUrl from '../assets/hooks/useDataFromUrl';

const CharactersFilterController = React.memo(({ filters, isFilterTabActive,
	setIsFilterTabActive,
	searchName, searchParamsChanges,
	setCurrentPage, setIsFilterClicked, isFilterClicked
}) => {
	const dispatch = useDispatch();

	const { gender, status, characterName, changeUrl } = useDataFromUrl()
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
		searchParamsChanges(activeGender, activeStatus, characterName)
	}, [gender, characterName, status])

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
});

CharactersFilterController.propTypes = {
	filters: propTypes.shape({
		gender: propTypes.arrayOf(propTypes.shape({
			type: propTypes.string,
			isActive: propTypes.bool
		}))
	}),
	isFilterTabActive: propTypes.bool,
	isFilterClicked: propTypes.bool,
	setIsFilterTabActive: propTypes.func,
	searchParamsChanges: propTypes.func,
	setCurrentPage: propTypes.func,
	setIsFilterClicked: propTypes.func,
	searchName: propTypes.string,
}


export default CharactersFilterController;