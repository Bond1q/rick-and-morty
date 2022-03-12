import React, { useState } from 'react';
import FilterContainer from '../Components/Filters/FilterContainer';
import '../styles/charactersPage.scss'
import { ReactComponent as Logo } from '../assets/images/sorting.svg';
import Search from '../Components/Search';
import { preventClosing } from '../assets/funcs/preventClosing';
import CharacterCard from '../Components/CharacterCard';
import characterImg from '../assets/images/character.jpeg'

const CharactersPage = () => {
	const [isFilterTabActive, setIsFilterTabActive] = useState(false)
	const filters = [
		{
			blockName: "Status", blockItems:
				[
					{ isActive: true, itemName: "all" },
					{ isActive: false, itemName: "alive" },
					{ isActive: false, itemName: "dead" },
					{ isActive: false, itemName: "unknown" },

				]
		},
		{
			blockName: "Gender", blockItems:
				[
					{ isActive: true, itemName: "all" },
					{ isActive: false, itemName: "female" },
					{ isActive: false, itemName: "male" },
					{ isActive: false, itemName: "genderless" },
					{ isActive: false, itemName: "unknown" },

				]
		},
	]
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

	const onFilterTabOpen = (e) => {
		preventClosing(e)
		setIsFilterTabActive(prev => !prev)
	}
	return (
		<div onClick={() => setIsFilterTabActive(false)} className='charactersPage' >
			<div className="mainTitle">All characters</div>
			<div className="menu">
				<div onClick={onFilterTabOpen} className="filters">
					<div className="title">
						<div className="titleText">Filters</div>
						<Logo className='filterLogo' width="30" height="30" />
					</div>

					<div className="allFilters">
						<FilterContainer
							isFilterTabActive={isFilterTabActive}
							setIsFilterTabActive={setIsFilterTabActive}
							filters={filters} />
					</div>
				</div>
				<div>
					<Search placeholderText='Name:' />
				</div>
			</div>
			<div className="cards">
				{toPropsTest.map((item, index) => {
					return <CharacterCard {...item} img={characterImg} key={index} />
				})}
			</div>
		</div >
	);
};

export default CharactersPage;