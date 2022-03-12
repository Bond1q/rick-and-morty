import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
const FilterBlockItem = ({ itemName, isActive }) => {
	return (
		<div className='filterBlockItem'>
			<div className={cn("checkBox", { activeCheckBox: isActive })}></div>
			<div className={cn("itemName", { activeItemName: isActive })}>{itemName}</div>
		</div>
	);
};

FilterBlockItem.propTypes = {
	itemName: propTypes.string,
	isActive: propTypes.bool,

}

export default FilterBlockItem;