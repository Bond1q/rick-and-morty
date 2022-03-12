import React from 'react';
import propTypes from 'prop-types';
import FilterBlock from './FilterBlock';
import cn from 'classnames';
import '../../styles/filter/filterContainer.scss'
import { preventClosing } from './../../assets/funcs/preventClosing';
const FilterContainer = ({ filters, isFilterTabActive, setIsFilterTabActive }) => {
	const blocks = filters.map((block, index) => {
		return <FilterBlock
			key={index}
			blockName={block.blockName}
			blockItems={block.blockItems}
		/>
	})


	return (
		<div onClick={preventClosing} className={cn('filterContainer', { isFilterVisible: isFilterTabActive })}>
			<div>{blocks}</div>
			<div className={cn("filterBtn")}>
				<button>Filter</button>
			</div>
		</div>
	);
};

FilterContainer.propTypes = {
	filters: propTypes.arrayOf(propTypes.shape(
		{
			blockName: propTypes.string,
			blockItems: propTypes.arrayOf(
				propTypes.shape({
					isActive: propTypes.bool,
					itemName: propTypes.string
				}))
		})).isRequired,
	isFilterTabActive: propTypes.bool.isRequired,
	setIsFilterTabActive: propTypes.func.isRequired,

}

export default FilterContainer;