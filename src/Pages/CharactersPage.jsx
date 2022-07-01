import React, { useState, useEffect } from 'react';
import '../styles/charactersPage.scss'
import { ReactComponent as Logo } from '../assets/images/sorting.svg';
import Search from '../Components/Search';
import { preventMainFunc } from '../assets/funcs/preventMainFunc';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters, setActiveCharacterFilter } from '../redux/reducers/charactersReducer/actionCreators';
import Pagination from '../Components/Pagination';
import charactersCardsList from '../assets/funcs/charactersCardsList';
import Loader from '../Components/Loader';
import NotFound from '../Components/NotFound';
import CharactersFilterController from '../Components/CharactersFilterController';
import useDataFromUrl from '../assets/hooks/useDataFromUrl';

const CharactersPage = () => {
	const dispatch = useDispatch();
	const [characters, filters, pages, isLoading, isCorrectParams] = useSelector(({ charactersReducer }) => {
		const cR = charactersReducer
		return [cR.characters, cR.filters, cR.pages, cR.isLoading, cR.isCorrectParams]
	})

	const charactersToProps = charactersCardsList(characters)
	const { page, gender, status, chacterName, changeUrl } = useDataFromUrl()
	const [currentPage, setCurrentPage] = useState(page);
	const [isFilterTabActive, setIsFilterTabActive] = useState(false)
	const [isFilterClicked, setIsFilterClicked] = useState(false)
	const [searchName, setSearchName] = useState('')

	const onFilterTabToggle = (e) => {
		preventMainFunc(e)
		setIsFilterTabActive(prev => !prev)
	}

	const searchParamsChanges = (activeGender, activeStatus, characterName) => {
		if (gender !== activeGender) {
			dispatch(setActiveCharacterFilter('gender', gender))
			dispatch(getCharacters(currentPage, gender, status, characterName))
		}
		if (status !== activeStatus) {
			dispatch(setActiveCharacterFilter('status', status))
			dispatch(getCharacters(currentPage, gender, status, characterName))
		}

		if (characterName) {
			setSearchName(characterName)
			dispatch(getCharacters(currentPage, gender, status, characterName))
		}
	}

	useEffect(() => {
		if (page !== currentPage) {
			setCurrentPage(page)
		}

	}, [page])

	useEffect(() => {
		changeUrl(currentPage, gender, status, chacterName)
		dispatch(getCharacters(currentPage, gender, status, chacterName))
	}, [currentPage])


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
								<CharactersFilterController
									filters={filters}
									isFilterTabActive={isFilterTabActive}
									setIsFilterTabActive={setIsFilterTabActive}

									searchParamsChanges={searchParamsChanges}
									searchName={searchName}
									setCurrentPage={setCurrentPage}

									isFilterClicked={isFilterClicked}
									setIsFilterClicked={setIsFilterClicked}
								/>
							</div>
						</div>
						<Search
							searchDefaultValue={searchName}
							onFilterClicked={setIsFilterClicked}
							setSearchName={setSearchName}
							placeholderText='Name:' />

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





