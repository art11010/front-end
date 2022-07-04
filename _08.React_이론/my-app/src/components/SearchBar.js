import React from 'react';

function SearchBar() {
	return (
		<>
			<input type='text' placeholder='Search..' />
			<div>
				<input type='checkbox' id='stock' />
				<label htmlFor='stock'>Only show products in stock</label>
			</div>
		</>
	);
}

export default SearchBar;