import React, { useEffect } from 'react';
import '../styles/homePage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getRandomCharacters } from '../redux/reducers/charactersReducer/actionCreators';
import charactersCardsList from '../assets/funcs/charactersCardsList';
import Loader from '../Components/Loader';
const HomePage = () => {
	const [characters, isLoading] = useSelector(({ charactersReducer }) => {
		return [charactersReducer.characters, charactersReducer.isLoading]
	})
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRandomCharacters(6))

	}, [])
	const charactersToProps = charactersCardsList(characters).slice(0, 6)
	return (
		<>
			{isLoading ? <Loader /> : <div className='homePage'>
				<div className="cards">
					{charactersToProps}
				</div>
			</div>}
		</>


	);
};

export default HomePage; 