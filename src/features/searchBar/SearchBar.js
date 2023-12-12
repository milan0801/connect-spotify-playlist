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
    <form onSubmit={handleSubmit}>
      <input type='text' value={searchString} placeholder='Search keyword' onChange={handleChange} />
      <button disable={searchResultIsLoading}>
        SEARCH
      </button>
    </form>
  );
}

export default SearchBar;