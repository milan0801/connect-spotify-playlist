import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchKeyword, isLoadingResults } from '../searchResults/searchResultsSlice';

function SearchBar() {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const searchResultIsLoading = useSelector(isLoadingResults);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchString) {
      alert('Please input the search keyword!');
      return;
    }
    dispatch(searchKeyword(searchString));
    setSearchString('');
  }

  const handleChange = (e) => {
    setSearchString(e.target.value);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input type='search' value={searchString}  onChange={handleChange} />
      <button disabled={searchResultIsLoading}>
      <i class="fa fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;