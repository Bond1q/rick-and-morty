import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEpisode } from './../redux/reducers/seasonsReducer/actionCreator';
import { getCharactersByIds } from './../redux/reducers/charactersReducer/actionCreators';
import charactersCardsList from './../assets/funcs/charactersCardsList';
import '../styles/singleEpisodePage.scss'
import Loader from '../Components/Loader';
import { useLocation } from 'react-router-dom';
import * as constants from '../constants'

const SingleEpisodePage = () => {
	const url = useLocation().pathname
	const [idFromUrl, setIdFromUrl] = React.useState(+(url.split("/").reverse()[0]))
	const [episode, isLodingSeasonReducer] = useSelector(({ seasonReducer }) => {
		return [seasonReducer.episode, seasonReducer.isLoading]
	})
	const [characters, isLodingCharactersReducer] = useSelector(({ charactersReducer }) => {
		return [charactersReducer.characters, charactersReducer.isLoading]
	})

	const dispatch = useDispatch()
	useEffect(() => {

		const newId = +(url.split("/").reverse()[0])
		if (newId > 0 && newId <= constants.EPISODES_COUNT) {

			dispatch(getEpisode(newId))
			setIdFromUrl(newId)

		} else {
			dispatch(getEpisode(1))

		}
	}, [url])

	useEffect(() => {

		if (episode.characters.length > 0) {
			dispatch(getCharactersByIds(episode.characters))
		}
	}, [episode.characters])

	const charactersToProps = charactersCardsList(characters)

	return (
		<>
			{isLodingSeasonReducer || isLodingCharactersReducer ? <Loader /> :

				<div className='episodePage'>
					<div className="mainTitle">{episode.name}</div>
					<div className="subtitle">
						<div className="seasIndex">Season: {episode.seasonIndex}</div>
						<div className="episIndex"> Episode: {episode.episodeIndex}</div>


					</div>
					<div className="cards">
						{charactersToProps}
					</div>
				</div>
			}
		</>

	);
};

export default SingleEpisodePage;