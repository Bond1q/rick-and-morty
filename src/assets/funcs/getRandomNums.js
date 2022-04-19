// function getRandomInt(max) {
// 	return Math.floor(Math.random() * max);
//  }


const getRandomNums = (count) => {
	const randNumbers = []
	let randNum = 0
	for (let i = 0; i < count; i++) {
		while (true) {
			randNum = Math.floor(Math.random() * 825) + 1;
			if (!randNumbers.includes(randNum)) {
				randNumbers.push(randNum)
				break;
			}
		}
	}
	return randNumbers
}

export default getRandomNums