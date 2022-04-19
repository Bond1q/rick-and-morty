import CharacterCard from "../../Components/CharacterCard"
import divideEpisodesToSeason from "./divideEpisodesToSeason"

const charactersCardsList = (charactersList) => {
	const newCharactersList = charactersList.map(character => {
		const { id, name, status, species, gender, origin, image: img } = character
		const [season, episode] = divideEpisodesToSeason(character.episode)
		const objToProps = { id, name, status, species, gender, origin, img, season, episode }
		return <CharacterCard {...objToProps} key={character.id} />
	})
	return newCharactersList
}

export default charactersCardsList