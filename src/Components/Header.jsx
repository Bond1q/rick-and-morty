import React from 'react';
import '../styles/header.scss'
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
					<NavLink to="/characters/page=1?gender=all&status=all" style={({ isActive }) => ({ fontWeight: isActive ? 700 : 500 })}>
						Characters
					</NavLink>
					<NavLink to='/seasons' style={({ isActive }) => ({ fontWeight: isActive ? 700 : 500 })}>
						Seasons
					</NavLink>
				</div>
			</div>
			<div className="title">

				<div className="titleText">
					The Rick and Morty Wiki
				</div>
				<BgTitle className='bgTitle' width={60} />

			</div>
		</div >
	);
};

export default Header;