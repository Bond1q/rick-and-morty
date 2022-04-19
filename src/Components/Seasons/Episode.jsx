import React from 'react';
import propTypes from 'prop-types';

const Episode = ({ index, title }) => {
	return (
		<div className='episode'>
			<div className="index">
				EP {index}
			</div>
			<div className="episodeTitle">
				{title}
			</div>

		</div>
	);
};

Episode.propTypes = {
	index: propTypes.number.isRequired,
	title: propTypes.string.isRequired
}
export default Episode;