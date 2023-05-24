import React, { useState } from 'react';
import './index.css';
import loupe from '../../assets/Imgs/loupe.svg';

const SearchBar = ({ onSearch, searchError }) => {
	const [searchText, setSearchText] = useState('');
	const [placeholder, setPlaceholder] = useState('Search GitHub username…');

	const handleChange = (e) => {
		setSearchText(e.target.value);
		setPlaceholder('');
	};

	const handleSearch = () => {
		if (searchText.trim() !== '') {
			onSearch(searchText);
			setSearchText('');
			setPlaceholder('Search GitHub username…');
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const getErrorMessage = () => {
		if (searchError === 'No results') {
			return 'Aucun résultat trouvé.';
		} else {
			return 'no results';
		}
	};

	return (
		<div className="search-bar">
			<div className="loupe-input">
				<img src={loupe} alt="Loupe" className="loupe-icon" />
				<input
					className="input-search"
					type="text"
					value={searchText}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					placeholder={placeholder}
				/>
			</div>
			<div className='error_btn'>
				<button className="btn-search" onClick={handleSearch}>
					Search
				</button>
				{searchError && <p className="error-message">{getErrorMessage()}</p>}
			</div>
		</div>
	);
};

export default SearchBar;