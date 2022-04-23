import React from 'react';
import propTypes from 'prop-types';

const Episode = ({ index, title, id, urlChange }) => {
	return (
		<div onClick={() => urlChange(id)} className='episode'>
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
	title: propTypes.string.isRequired,
	id: propTypes.number,
	urlChange: propTypes.func
}
export default Episode;