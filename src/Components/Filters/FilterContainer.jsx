import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterBlock from './FilterBlock';
import cn from 'classnames';
import '../../styles/filter/filterContainer.scss'
import { preventMainFunc } from './../../assets/funcs/preventMainFunc';
const FilterContainer = React.memo(({ filters, isFilterTabActive, setIsFilterTabActive, onFilterClicked, setActiveFilterChanged }) => {
	const [isBtnActive, setIsBtnActive] = useState(false)
	const blocks = filters.map((block, index) => {
		return <FilterBlock
			key={index}
			blockName={block.blockName}
			blockItems={block.blockItems}
			setActiveFilterChanged={setActiveFilterChanged}
			setIsBtnActive={setIsBtnActive}
		/>
	})

	const onFilterBtnCkicked = () => {
		if (isBtnActive) {
			onFilterClicked(true)
			setIsBtnActive(false)
		}
		setIsFilterTabActive(false)

	}


	return (
		<div onClick={preventMainFunc} className={isFilterTabActive ? 'filterContainer active' : 'filterContainer'} >
			<div>{blocks}</div>
			<div onClick={onFilterBtnCkicked} className={cn("filterBtn", { isBtnActive: isBtnActive })}>
				<button>Filter</button>
			</div>
		</div>
	);
});

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
	setActiveFilterChanged: propTypes.func.isRequired,
	onFilterClicked: propTypes.func.isRequired,
	isFilterTabActive: propTypes.bool.isRequired,
	setIsFilterTabActive: propTypes.func.isRequired,

}

export default FilterContainer;