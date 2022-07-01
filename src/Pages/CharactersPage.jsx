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
import NotFound from '../Components/NotFound';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSearchParams } from "react-router-dom";
import setParamsToUrl from "../assets/funcs/setParamsToUrl";
import CharactersFilterController from '../Components/CharactersFilterController';
import useDataFromUrl from '../assets/hooks/useDataFromUrl';

const CharactersPage = () => {
	const url = useLocation()
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const [characters, filters, pages, isLoading, isCorrectParams] = useSelector(({ charactersReducer }) => {
		const cR = charactersReducer
		return [cR.characters, cR.filters, cR.pages, cR.isLoading, cR.isCorrectParams]
	})

	const charactersToProps = charactersCardsList(characters)
	const [currentPage, setCurrentPage] = useState(+useParams().pageNum);
	const { page, gender, status, chacterName } = useDataFromUrl()
	const [isFilterTabActive, setIsFilterTabActive] = useState(false)
	const [isFilterClicked, setIsFilterClicked] = useState(false)
	const [searchName, setSearchName] = useState('')
	const changeUrl = (pages, gender, status, name) => {
		navigate(setParamsToUrl(pages, gender, status, name), { replace: true })
	}
	useEffect(() => {
		if (page !== currentPage) {
			setCurrentPage(page)
		}

	}, [page])


	const onFilterTabToggle = (e) => {
		preventMainFunc(e)
		setIsFilterTabActive(prev => !prev)
	}
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
									gender={gender}
									name={chacterName}
									status={status}
									currentPage={currentPage}
									changeUrl={changeUrl}
									searchName={searchName}
									setCurrentPage={setCurrentPage}
									setSearchName={setSearchName}
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





