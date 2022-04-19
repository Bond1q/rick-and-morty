import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCharacter } from './../redux/reducers/charactersReducer/actionCreators';
import Loader from '../Components/Loader';
import '../styles/characterPage.scss'
import divideEpisodesToSeason from './../assets/funcs/divideEpisodesToSeason';
const CharacterPage = () => {
	const dispatch = useDispatch()
	const url = React.useMemo(() => (+window.location.href.split("/").reverse()[0]), [window.location.href])
	const [{ name, status, species, origin, type,
		location, image, episode }, isLoading] = useSelector(({ charactersReducer }) => {
			return [charactersReducer.singleCharacter, charactersReducer.isLoading]
		})

	const character = {
		name, status, species, type, origin,
		location
	}

	// const activeColor = setColorByStatus(status)[0]

	const information = [];
	for (const property in character) {
		if (character[property]) {
			information.push(<div className='informationItem' key={property}><span className='type'>{property}:</span>
				<span className='value'>{character[property]}</span></div>)
		} else {
			information.push(<div className='informationItem' key={property}><span className='type'>{property}:</span>
				<span className='value'>{'unknown'}</span></div>)
		}
	}


	const episodes = []
	episode.forEach((epi, index) => {
		const [seasonIndex, episodeIndex] = divideEpisodesToSeason(+(epi.split("/").reverse()[0]))
		episodes.push(<div key={index} className='episode'>
			<div className="seas">
				Season: {seasonIndex}
			</div>
			<div className="epis">
				<div>Episode:</div>
				<div>{episodeIndex}</div>

			</div>
		</div>)
	});
	// let seasonIndex, episodeIndex, title, elemIndexInArr = 0;
	// episode.forEach(item => {
	// 	[seasonIndex, episodeIndex] = divideEpisodesToSeason(+(item.split("/").reverse()[0]))
	// 	if (seasons.filter(season => season.seasonIndex === seasonIndex).length === 0) {
	// 		elemIndexInArr = seasons.length;
	// 		seasons.push({ seasonIndex, episodes: [{ episodeIndex, title }] })
	// 	} else {
	// 		seasons[elemIndexInArr].episodes.push({ episodeIndex, title })
	// 	}
	// })


	useEffect(() => {
		if (url > 0 && url < 827) {
			dispatch(getSingleCharacter(url))
		} else {
			dispatch(getSingleCharacter(1))
		}
	}, [url])

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
export default CharacterPage;