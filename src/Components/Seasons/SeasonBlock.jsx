import React from 'react';
import Episode from './Episode';
import '../../styles/seasonBlock.scss'
import propTypes from 'prop-types';

const SeasonBlock = ({ seasonIndex, episodes, urlChange }) => {

	const episodesToProps = episodes.map((episode) => {
		return <Episode
			id={episode.id}
			index={episode.episodeIndex}
			title={episode.title}
			key={episode.episodeIndex}
			urlChange={urlChange}
		/>
	})
	return (
		<div className='seasonBlock'>
			<div className="title">Season {seasonIndex}</div>
			<div className='blockItems'>
				<div className="colum1">{episodesToProps.slice(0, Math.floor(episodesToProps.length / 2))}</div>
				<div className="colum2">{episodesToProps.slice(Math.floor(episodesToProps.length / 2))}</div>
			</div>
		</div>
	);
};

SeasonBlock.propTypes = {
	seasonIndex: propTypes.number,
	episodes: propTypes.arrayOf(
		propTypes.shape({
			episodeIndex: propTypes.number,
			title: propTypes.string,
			id: propTypes.number
		})
	),
	urlChange: propTypes.func
}

export default SeasonBlock;