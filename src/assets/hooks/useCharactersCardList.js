import CharacterCard from '../../Components/CharacterCard';
import divideEpisodesToSeason from './../funcs/divideEpisodesToSeason';
import { useMemo } from 'react';

export const useCharactersCardList = (charactersList) => {

	// console.log(charactersList);
	const newCharactersList = useMemo(() => charactersList.map(character => {
		const { id, name, status, species, gender, origin, image: img } = character
		const [season, episode] = divideEpisodesToSeason(character.episode)
		const objToProps = { id, name, status, species, gender, origin, img, season, episode, episodeIndex: character.episode }
		return <CharacterCard {...objToProps} key={character.id} />
	}), [charactersList[charactersList.length - 1]])
	return newCharactersList
};

