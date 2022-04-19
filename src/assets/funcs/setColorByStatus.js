const setColorByStatus = (status) => {
	if (status === 'Alive') {
		return ['aliveCharacter', 'aliveCharacterHover']
	} else if (status === 'Dead') {
		return ['deadCharacter', 'deadCharacterHover']
	} else {
		return ['unknownCharacter', 'unknownCharacterHover']
	}
}
export default setColorByStatus