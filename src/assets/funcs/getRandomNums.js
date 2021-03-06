import * as constants from '../../constants'
const getRandomNums = (count) => {
	const randNumbers = []
	let randNum = 0
	for (let i = 0; i < count; i++) {
		while (true) {
			randNum = Math.floor(Math.random() * constants.CHARACTERS_COUNT - 1) + 1;
			if (!randNumbers.includes(randNum)) {
				randNumbers.push(randNum)
				break;
			}
		}
	}
	return randNumbers
}

export default getRandomNums