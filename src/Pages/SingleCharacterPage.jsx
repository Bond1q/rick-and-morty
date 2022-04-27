import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCharacter } from '../redux/reducers/charactersReducer/actionCreators';
import Loader from '../Components/Loader';
import '../styles/singleCharacterPage.scss'
import divideEpisodesToSeason from '../assets/funcs/divideEpisodesToSeason';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as constants from '../constants'
import { onEpisodeClick } from '../assets/funcs/onEpisodeClick';
const SingleCharacterPage = () => {
	const urlChange = useNavigate()
	const url = useLocation().pathname
	const dispatch = useDispatch()
	const idFromUrl = React.useMemo(() => (+window.location.href.split("/").reverse()[0]), [window.location.href])
	const [{ name, status, species, gender, origin, type,
		location, image, episode }, isLoading] = useSelector(({ charactersReducer }) => {
			return [charactersReducer.singleCharacter, charactersReducer.isLoading]
		})

	const character = {
		name, status, species, gender, type, origin,
		location
	}

	const information = [];
	for (const property in character) {
		information.push(<div className='informationItem' key={property}><span className='type'>{property}:</span>
			<span className='value'>{character[property] || 'unknown'}</span></div>)
	}

	const episodes = []
	episode.forEach((epi, index) => {
		const [seasonIndex, episodeIndex] = divideEpisodesToSeason(+(epi.split("/").reverse()[0]))
		episodes.push(
			<div onClick={(e) => onEpisodeClick(+(epi.split("/").reverse()[0]), urlChange, url, e)} key={index} className='episode'>
				<div className="seas">
					Season: {seasonIndex}
				</div>
				<div className="epis">
					<div>Episode:</div>
					<div>{episodeIndex}</div>

				</div>
			</div>)
	});



	useEffect(() => {
		if (idFromUrl > 0 && idFromUrl <= constants.CHARACTERS_COUNT) {
			dispatch(getSingleCharacter(idFromUrl))
		} else {
			dispatch(getSingleCharacter(1))
		}
	}, [idFromUrl])

	return (
		<>
			{isLoading ? <Loader /> :
				<div className='characterPage'>
					<div className="information">
						<div className="side1"><img src={image} alt="" /></div>
						<div className="side2">
							{information}
						</div>
					</div>
					<div className="episodes">
						<div className="title">Episodes where <span>{name}</span> was</div>
						{episodes.length > 10 ?
							<div className="columns">

								<div className="column1">{episodes.slice(0, Math.floor(episodes.length / 2))}</div>
								<div className="column2">{episodes.slice(Math.floor(episodes.length / 2))}</div>
							</div>
							: <div className='someEpisodes'>{episodes}</div>
						}


					</div>
				</div>

			}
		</>

	);
};

const setColorByStatus = (status) => {
	if (status === 'Alive') {
		return ['aliveCharacter', 'aliveCharacterHover']
	} else if (status === 'Dead') {
		return ['deadCharacter', 'deadCharacterHover']
	} else {
		return ['unknownCharacter', 'unknownCharacterHover']
	}
}
export default SingleCharacterPage;