import React from 'react';
import propTypes from 'prop-types';
import '../styles/сharacterCard.scss'
import cn from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';
import { preventMainFunc } from './../assets/funcs/preventMainFunc';
import setColorByStatus from '../assets/funcs/setColorByStatus';
const CharacterCard = React.memo(({ name, status, species, origin, gender, season, episode, id, img, episodeIndex }) => {
	console.log('CharacterCard');
	const [activeColor, activeHoverColor] = setColorByStatus(status)
	const urlChange = useNavigate()
	const url = useLocation().pathname
	const setCharacterIdInUrl = () => {
		urlChange('/characters/' + id);
	}
	const onEpisodeClick = (e) => {
		preventMainFunc(e)
		if (!url.includes('seasons')) {
			urlChange('/seasons/' + episodeIndex)
		} else if (+(url.split("/").reverse()[0]) !== episodeIndex) {
			urlChange('/seasons/' + episodeIndex)
		}
	}
	return (
		<div onClick={setCharacterIdInUrl} className='сharacterCard'>
			<div className="side1">
				<img src={img} />
			</div>
			<div className="side2">
				<div className="nameStatus">
					<div className={cn("name", activeHoverColor)}>{name}</div>
					<div className="status">
						<div className={cn('dot', activeColor)}></div>
						{status} - {species} - {gender}
					</div>
				</div>
				<div className="origin">
					<div className="title">
						Origin:
					</div>
					<div className="originName">{origin}</div>
				</div>
				<div onClick={onEpisodeClick} className="firstSeen">
					<div className="title">First seen in:</div>
					<div className="episodTitle">
						<span>Season: {season}</span> <span>Episode: {episode}</span>
					</div>
				</div>
			</div>
		</div>
	);
});


CharacterCard.propTypes = {
	id: propTypes.number.isRequired,
	name: propTypes.string.isRequired,
	gender: propTypes.string.isRequired,
	status: propTypes.string.isRequired,
	species: propTypes.string.isRequired,
	origin: propTypes.string.isRequired,
	season: propTypes.number.isRequired,
	episode: propTypes.number.isRequired,
	img: propTypes.string.isRequired,
	episodeIndex: propTypes.number
}



export default CharacterCard;