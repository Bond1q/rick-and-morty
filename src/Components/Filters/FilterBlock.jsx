import React from 'react';
import propTypes from 'prop-types';
import FilterBlockItem from './FilterBlockItem';
import '../../styles/filter/filterBlock.scss'

const FilterBlock = React.memo(({ blockName, blockItems, setActiveFilterChanged, setIsBtnActive }) => {
	const changeActiveBlockItem = (blockItem) => {
		setActiveFilterChanged(blockName, blockItem)
	}
	const items = blockItems.map((item, index) => {
		return <FilterBlockItem
			key={index}
			isActive={item.isActive}
			itemName={item.itemName}
			changeActiveBlockItem={changeActiveBlockItem}
			setIsBtnActive={setIsBtnActive}
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
});


FilterBlock.propTypes = {
	blockName: propTypes.string,
	blockItems: propTypes.arrayOf(
		propTypes.shape({
			isActive: propTypes.bool,
			itemName: propTypes.string
		})),
	setFilterChanged: propTypes.func,
	setIsBtnActive: propTypes.func
}

export default FilterBlock;