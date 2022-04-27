import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../styles/search.scss'

const Search = React.memo(({ placeholderText, setSearchName, onFilterClicked, searchDefaultValue }) => {
	const [inputText, setInputText] = useState(searchDefaultValue)
	React.useEffect(() => {
		setInputText(searchDefaultValue)
	}, [searchDefaultValue])

	const onChangeInput = (e) => {
		setInputText(e.target.value)
	}
	const onBlurInput = () => {
		setInputText(prev => prev.trim())
		setSearchName(inputText.trim())
	}

	const onInputClick = () => {
		setSearchName(inputText.trim())
		onFilterClicked(true)
	}

	const onButtonPress = (e) => {
		if (e.charCode === 13) {
			setSearchName(inputText.trim())
			onFilterClicked(true)
		}
	}
	return (
		<div onKeyPress={onButtonPress} className='seacrh'>
			<input value={inputText}
				onChange={onChangeInput}
				placeholder={placeholderText}
				onBlur={onBlurInput}

				type="text" />

			<div className="seacrhBtn">
				<button onClick={onInputClick}></button>
			</div>
		</div>
	);
});

Search.propTypes = {
	placeholderText: propTypes.string,
	searchDefaultValue: propTypes.string,
	setSearchName: propTypes.func,
	onFilterClicked: propTypes.func


}


export default Search;