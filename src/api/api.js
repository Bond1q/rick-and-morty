import axios from "axios";

export const requestCharacters = async (page, gender = 'all', status = 'all', characterName = '') => {
	let url = `https://rickandmortyapi.com/api/character?page=${page}`

	if (gender !== 'all') {
		url += `&gender=${gender}`
	}
	if (status !== 'all') {
		url += `&status=${status}`
	}
	if (characterName !== '') {
		url += `&name=${characterName}`
		// console.log(url);
	}
	try {
		const res = await axios.get(url)
		// console.log(res);
		return res
	} catch (error) {
		return { status: 0 }
	}
}

export const requestCharactersByIds = async (ids) => {
	const url = 'https://rickandmortyapi.com/api/character/' + ids.join();
	try {
		const result = await axios.get(url)
		return result
	} catch (error) {
		console.error(error, "Function:requestCharactersByIds")
	}
}

export const requestSingleCharacter = async (id) => {
	const url = 'https://rickandmortyapi.com/api/character/' + id;
	try {
		const result = await axios.get(url);
		return result
	} catch (error) {
		console.error(error, "Function:requestSingleCharacter")

	}
}

export const requestSeasons = async () => {
	let mainUrl = 'https://rickandmortyapi.com/api/episode'
	const urls = []
	try {
		let res = await axios.get(mainUrl)
		const pagesCount = res.data.info.pages
		for (let i = 2; i < pagesCount + 1; i++) {
			urls.push(`${mainUrl}?page=${i}`);
		}
		const results = await axios.all(urls.map(url => axios.get(url)))
		results.unshift(res);
		return results
	} catch (error) {
		console.error(error, "Function: requestSeasons")
	}
}


export const requestEpisode = async (episodeId) => {
	const url = `https://rickandmortyapi.com/api/episode/${episodeId}`
	try {
		const res = await axios.get(url)
		return res
	} catch (error) {
		console.error(error, "Function: requestEpisode")

	}
}

export const requestCharactersCount = async () => {
	try {
		const res = await axios.get("https://rickandmortyapi.com/api/character")
		return res.data.info.count;
	} catch (error) {
		console.error(error, "Function: requestCharactersCount")

	}
}