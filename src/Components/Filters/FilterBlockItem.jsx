import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
const FilterBlockItem = React.memo(({ itemName, isActive, changeActiveBlockItem, setIsBtnActive }) => {
	const filterBlockItemOnClick = () => {
		setIsBtnActive(true)
		changeActiveBlockItem(itemName)
	}
	return (
		<div onClick={() => filterBlockItemOnClick()} className='filterBlockItem'>
			<div className={cn("checkBox", { activeCheckBox: isActive })}></div>
			<div className={cn("itemName", { activeItemName: isActive })}>{itemName}</div>
		</div>
	);
});

FilterBlockItem.propTypes = {
	itemName: propTypes.string,
	isActive: propTypes.bool,
	changeActiveBlockItem: propTypes.func,
	setIsBtnActive: propTypes.func,
}

export default FilterBlockItem;