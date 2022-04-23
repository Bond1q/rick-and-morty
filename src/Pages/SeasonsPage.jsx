import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSeasons } from './../redux/reducers/seasonsReducer/actionCreator';
import Loader from '../Components/Loader';
import SeasonBlock from '../Components/Seasons/SeasonBlock';
import '../styles/seasonsPage.scss'
import { useNavigate } from 'react-router-dom';
const SeasonsPage = () => {
	const [seasons, isLoading] = useSelector(({ seasonReducer }) => [seasonReducer.seasons, seasonReducer.isLoading])
	const urlChange = useNavigate()
	const setEpisodeIdInUrl = (id) => {
		urlChange(`/seasons/${id}`)
	}

	const seasonsBlocksToProps = seasons.map((season) => {

		return <SeasonBlock
			urlChange={setEpisodeIdInUrl}
			seasonIndex={season.seasonIndex}
			episodes={season.episodes}
			key={season.seasonIndex} />
	})
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllSeasons())
	}, [])


	return (
		<>
			{isLoading ? <Loader /> :
				<div className='seasonsPage'>
					<div className="mainTitle">Seasons</div>
					<div className="seasonsBlocks">{seasonsBlocksToProps}</div>
				</div>
			}

		</>
	);
};

export default SeasonsPage;