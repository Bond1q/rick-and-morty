import React from 'react';
import characterImg from '../assets/images/character.jpeg'
import CharacterCard from '../Components/CharacterCard';
import '../styles/homePage.scss'
const HomePage = () => {
	const toPropsTest = [
		{ name: 'New Improved Galactic Federation Guard', status: 'Unknown', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Funny Songs Presenter', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Ants in my Eyes Johnson', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Michael', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Michael', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Michael', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Michael', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Michael', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },
		{ name: 'Michael', status: 'Alive', species: 'Dragon', origin: 'Draygon', season: 5, episod: 4, episodTitle: "Claw and Hoarder: Special Ricktim's Morty" },

	]
	return (
		<div className='homePage'>
			<div className="cards">
				{toPropsTest.map((item, index) => {
					return <CharacterCard {...item} img={characterImg} key={index} />
				})}
			</div>
		</div>
	);
};

export default HomePage; 