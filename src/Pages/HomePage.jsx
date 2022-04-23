import React, { useEffect } from 'react';
import '../styles/homePage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getCharactersByIds } from '../redux/reducers/charactersReducer/actionCreators';
import charactersCardsList from '../assets/funcs/charactersCardsList';
import Loader from '../Components/Loader';
import getRandomNums from '../assets/funcs/getRandomNums';
import { requestEpisode } from './../api/api';
const HomePage = () => {
	const [characters, isLoading] = useSelector(({ charactersReducer }) => {
		return [charactersReducer.characters, charactersReducer.isLoading]
	})
	const dispatch = useDispatch()
	useEffect(() => {
		const randNums = getRandomNums(6)
		dispatch(getCharactersByIds(randNums))

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