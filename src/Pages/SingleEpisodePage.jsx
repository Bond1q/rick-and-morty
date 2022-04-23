import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEpisode } from './../redux/reducers/seasonsReducer/actionCreator';
import { getCharactersByIds } from './../redux/reducers/charactersReducer/actionCreators';
import charactersCardsList from './../assets/funcs/charactersCardsList';
import '../styles/singleEpisodePage.scss'
import Loader from '../Components/Loader';
import { useLocation } from 'react-router-dom';
import { useCharactersCardList } from './../assets/hooks/useCharactersCardList';
const SingleEpisodePage = () => {
	// const idFromUrl = React.useMemo(() => (+window.location.href.split("/").reverse()[0]), [window.location.href])
	const url = useLocation().pathname
	const [idFromUrl, setIdFromUrl] = React.useState(+(url.split("/").reverse()[0]))
	// console.log(url.pathname);

	const [episode, isLodingSeasonReducer] = useSelector(({ seasonReducer }) => {
		return [seasonReducer.episode, seasonReducer.isLoading]
	})
	const [characters, isLodingCharactersReducer] = useSelector(({ charactersReducer }) => {
		return [charactersReducer.characters, charactersReducer.isLoading]
	})

	const dispatch = useDispatch()
	useEffect(() => {
		// console.log('url hcange');
		const newId = +(url.split("/").reverse()[0])
		if (newId > 0 && newId < 52) {

			dispatch(getEpisode(newId))
			setIdFromUrl(newId)

		} else {
			dispatch(getEpisode(1))

		}
	}, [url])

	useEffect(() => {
		// console.log('www');
		if (episode.characters.length > 0) {
			dispatch(getCharactersByIds(episode.characters))
		}
	}, [episode.characters])
	// console.log('rerender');
	// console.table(episode);
	const charactersToProps = charactersCardsList(characters)

	// const charactersToProps = useCharactersCardList(characters)



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