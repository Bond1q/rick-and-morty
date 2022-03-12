import React from 'react';
import propTypes from 'prop-types';
import '../styles/сharacterCard.scss'
import cn from 'classnames';

const CharacterCard = ({ name, status, species, origin, season, episod, episodTitle, img }) => {

	const [activeColor, activeHoverColor] = setColorByStatus(status)
	return (
		<div className='сharacterCard'>
			<div className="side1">
				<img src={img} />
			</div>
			<div className="side2">
				<div className="nameStatus">
					<div className={cn("name", activeHoverColor)}>{name}</div>
					<div className="status">
						<div className={cn('dot', activeColor)}></div>
						{status} - {species}
					</div>
				</div>
				<div className="origin">
					<div className="title">
						Origin:
					</div>
					<div className="originName">{origin}</div>
				</div>
				<div className="firstSeen">
					<div className="title">First seen in:</div>
					<div className="episodTitle">
						{episodTitle}
					</div>
				</div>
			</div>
		</div>
	);
};


CharacterCard.propTypes = {
	name: propTypes.string.isRequired,
	status: propTypes.string.isRequired,
	species: propTypes.string.isRequired,
	origin: propTypes.string.isRequired,
	season: propTypes.number.isRequired,
	episod: propTypes.number.isRequired,
	episodTitle: propTypes.string.isRequired,
	img: propTypes.string.isRequired
}

const setColorByStatus = (status) => {
	if (status === 'Alive') {
		return ['aliveCharacter', 'aliveCharacterHover']
	} else if (status === 'Dead') {
		return ['deadCharacter', 'deadCharacterHover']
	} else {
		return ['unknownCharacter', 'unknownCharacterHover']
	}
}

export default CharacterCard;