const divideEpisodesToSeason = (episodes) => {
	if (episodes <= 11) {
		return [1, episodes]

	} else if (episodes > 11 && episodes <= 21) {
		return [2, episodes - 11]

	} else if (episodes > 21 && episodes <= 31) {
		return [3, episodes - 21]

	} else if (episodes > 31 && episodes <= 41) {
		return [4, episodes - 31]

	} else if (episodes > 41 && episodes <= 51) {
		return [5, episodes - 41]

	} else if (episodes > 51 && episodes <= 61) {
		return [6, episodes - 51]

	} else if (episodes > 61 && episodes <= 71) {
		return [7, episodes - 61]

	} else {
		return [8, episodes - 71]
	}
}

export default divideEpisodesToSeason

