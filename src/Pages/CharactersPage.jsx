import React, { useState, useEffect } from 'react';
import FilterContainer from '../Components/Filters/FilterContainer';
import '../styles/charactersPage.scss'
import { ReactComponent as Logo } from '../assets/images/sorting.svg';
import Search from '../Components/Search';
import { preventMainFunc } from '../assets/funcs/preventMainFunc';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters, setActiveCharacterFilter } from '../redux/reducers/charactersReducer/actionCreators';
import Pagination from '../Components/Pagination';
import charactersCardsList from '../assets/funcs/charactersCardsList';
import Loader from '../Components/Loader';
import getDataFromFilters from '../assets/funcs/getDataFromFilters';
import useDataFromUrl from '../assets/hooks/useDataFromUrl';
import setParamsToUrl from '../assets/funcs/setParamsToUrl';
import { useNavigate, useLocation } from "react-router-dom";
import NotFound from '../Components/NotFound';



const CharactersPage = () => {
	const dispatch = useDispatch();
	const urlChange = useNavigate()
	const [characters, filters, pages, isLoading, isCorrectParams] = useSelector(({ charactersReducer }) => {
		const cR = charactersReducer
		return [cR.characters, cR.filters, cR.pages, cR.isLoading, cR.isCorrectParams]
	})

	const [page, urlGender, urlStatus, urlName] = useDataFromUrl(['gender', 'status', 'name'])
	const charactersToProps = charactersCardsList(characters)
	const [filtersToProps, activeGender, activeStatus] = getDataFromFilters(filters)

	const [isFilterTabActive, setIsFilterTabActive] = useState(false)
	const [currentPage, setCurrentPage] = useState(page);
	const [searchName, setSearchName] = useState('')
	const [isFilterClicked, setIsFilterClicked] = useState(false)
	const url = useLocation().pathname

	const onFilterTabToggle = (e) => {
		preventMainFunc(e)
		setIsFilterTabActive(prev => !prev)
	}

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
		urlChange(setParamsToUrl(currentPage, urlGender, urlStatus, urlName), { replace: true })
		dispatch(getCharacters(currentPage, activeGender, activeStatus, searchName))
	}, [currentPage])

	useEffect(() => {
		if (isFilterClicked) {
			setCurrentPage(1)
			dispatch(getCharacters(1, activeGender, activeStatus, searchName))
			urlChange(setParamsToUrl(1, activeGender, activeStatus, searchName))
			setIsFilterClicked(false)
		}

	}, [isFilterClicked])


	useEffect(() => {

		if (urlGender !== activeGender || urlStatus !== activeStatus || urlName != '') {
			if (urlGender !== activeGender) {
				dispatch(setActiveCharacterFilter('gender', urlGender))
			}
			if (urlStatus !== activeStatus) {
				dispatch(setActiveCharacterFilter('status', urlStatus))
			}

			if (urlName) {
				setSearchName(urlName)
				dispatch(getCharacters(currentPage, urlGender, urlStatus, urlName))
			} else {
				setSearchName('')
				if (urlGender && urlStatus) {
					dispatch(getCharacters(currentPage, urlGender, urlStatus, ''))

				}
			}

			if (currentPage !== page) {
				setCurrentPage(page)
			}
		}

	}, [url])




	return (
		<>
			{!isCorrectParams ? <NotFound /> : isLoading ? <Loader /> :
				<div onClick={() => setIsFilterTabActive(false)} className='charactersPage' >
					<div className="mainTitle">All characters</div>
					<div className="menu">
						<div onClick={onFilterTabToggle} className="filters">
							<div className="title">
								<div className="titleText">Filters</div>
								<Logo className='filterLogo' width="30" height="30" />
							</div>

							<div className="allFilters">
								<FilterContainer
									isFilterTabActive={isFilterTabActive}
									setIsFilterTabActive={setIsFilterTabActive}
									filters={filtersToProps}
									setActiveFilterChanged={setActiveFilterChanged}
									onFilterClicked={setIsFilterClicked}
								/>
							</div>
						</div>
						<div>
							<Search
								searchDefaultValue={searchName}
								onFilterClicked={setIsFilterClicked}
								setSearchName={setSearchName}
								placeholderText='Name:' />
						</div>
					</div>
					<div className="cards">
						{charactersToProps}
					</div>
					<Pagination
						currentPage={currentPage}
						totalPageCount={pages}
						onPageChange={page => setCurrentPage(page)}
					/>

				</div >
			}
		</>

	);
};

export default CharactersPage;





