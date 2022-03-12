import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../styles/search.scss'

const Search = ({ placeholderText }) => {
	const [inputText, setInputText] = useState('')
	const onChangeInput = (e) => {
		setInputText(e.target.value)
	}
	const onBlurInput = () => {
		setInputText(prev => prev.trim())
	}
	return (
		<div className='seacrh'>
			<input value={inputText}
				onChange={onChangeInput}
				placeholder={placeholderText}
				onBlur={onBlurInput}
				type="text" />
			<div className="seacrhBtn">
				<button></button>
			</div>
		</div>
	);
};

Search.propTypes = {
	placeholderText: propTypes.string,


}


export default Search;