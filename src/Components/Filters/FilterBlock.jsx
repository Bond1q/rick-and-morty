import React from 'react';
import propTypes from 'prop-types';
import FilterBlockItem from './FilterBlockItem';
import '../../styles/filter/filterBlock.scss'

const FilterBlock = ({ blockName, blockItems }) => {
	const items = blockItems.map((item, index) => {
		return <FilterBlockItem
			key={index}
			isActive={item.isActive}
			itemName={item.itemName}
		/>
	})
	return (
		<div className='filterBlock'>
			<div className="blockName">
				{blockName}
			</div>
			<div>
				{items}
			</div>
		</div>
	);
};


FilterBlock.propTypes = {
	blockName: propTypes.string,
	blockItems: propTypes.arrayOf(
		propTypes.shape({
			isActive: propTypes.bool,
			itemName: propTypes.string
		})),
}

export default FilterBlock;