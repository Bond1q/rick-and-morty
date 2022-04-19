const getDataFromFilters = (filters) => {
	const activeFilters = [], filterToProps = [];
	let activeGender, activeStatus;
	for (let property in filters) {
		filterToProps.push({
			blockName: property, blockItems: filters[property].map(item => {
				if (item.isActive === true) {
					property === 'gender' ? activeGender = item.type : activeStatus = item.type
				}
				return { isActive: item.isActive, itemName: item.type }
			})
		})

	}
	return [filterToProps, activeGender, activeStatus]
}

export default getDataFromFilters