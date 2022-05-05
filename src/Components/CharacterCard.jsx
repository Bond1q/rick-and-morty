import React from 'react';
import propTypes from 'prop-types';
import '../styles/сharacterCard.scss'
import cn from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';
import setColorByStatus from '../assets/funcs/setColorByStatus';
import { onEpisodeClick } from './../assets/funcs/onEpisodeClick';
const CharacterCard = React.memo(({ name, status, species, origin, gender, season, episode, id, img, episodeIndex }) => {
	const [activeColor, activeHoverColor] = setColorByStatus(status)
	const urlChange = useNavigate()
	const url = useLocation().pathname
	const setCharacterIdInUrl = () => {
		urlChange('/characters/' + id);
	}
	const isLinkActive = () => {
		if (!url.includes('seasons') || +(url.split("/").reverse()[0]) !== episodeIndex) {
			return true
		}
		return false
	}

	return (
		<div onClick={setCharacterIdInUrl} className='сharacterCard'>
			<div className="side1">
				<img alt={name || 'character'} src={img} />
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
				<div onClick={(e) => onEpisodeClick(episodeIndex, urlChange, url, e)} className="firstSeen">
					<div className="title">First seen in:</div>
					<div className={cn("episodTitle", { isNotSpanActive: !isLinkActive() })}>
						<span >Season: {season}</span> <span>Episode: {episode}</span>
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