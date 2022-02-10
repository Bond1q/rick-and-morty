import React from 'react';
import '../styles/header.scss'
import Rick from '../assets/images/rick.png'
import Morty from '../assets/images/morty.png'
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BgTitle } from '../assets/images/bgTitle.svg';


const Header = () => {
	return (
		<div className='header'>
			<div className="bigHeaderRow">
				<NavLink to='/home'>
					<Logo className='logo' width={50} />
				</NavLink>
				<div className="menu">
					<NavLink to='/characters' style={({ isActive }) => ({ fontWeight: isActive ? 500 : 400 })}>
						Characters
					</NavLink>
					<NavLink to='/episods' style={({ isActive }) => ({ fontWeight: isActive ? 500 : 400 })}>
						Episods
					</NavLink>
				</div>
			</div>
			<div className="title">

				<div className="titleText">
					The Rick and Morty Wiki
				</div>
				<BgTitle className='bgTitle' width={50} />

			</div>
		</div >
	);
};

export default Header;