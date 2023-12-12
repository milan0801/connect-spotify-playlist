import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchResults, isLoadingResults } from './searchResultsSlice';
import { selectSongs, addSong } from '../playlist/playlistSlice';
import Results from '../../components/Results';

function SearchResults() {
  const [resultArr, setResultArr] = useState([]);
  const results = useSelector(searchResults);
  const resultsIsLoading = useSelector(isLoadingResults);
  const currentPlaylist = useSelector(selectSongs);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (JSON.stringify(results) !== '{}') {
      console.log(results.tracks);
      setResultArr([]);
      results.tracks.items.forEach(element => {
        const tmpObj = {};
        tmpObj['id'] = element.id;
        tmpObj['artist'] = element.artists[0].name;
        tmpObj['name'] = element.name;
        tmpObj['uri'] = element.uri;
        tmpObj['album'] = element.album.name;
        setResultArr(prev => [...prev, tmpObj]);
      });
    }
  }, [results]);

  if (resultsIsLoading) {
    return (
      <div className='search-results'>
        <h2>Loding</h2>
      </div>
    );
  }
  if (!results) {
    return (
      <>
        <h2>
          Results
        </h2>
      </>
    );
  }
  

  const handleClick = (songId) => {
    const notAdded = currentPlaylist.every(item => item.id !== songId);
  
    if (!notAdded) {
      return;
    } else {
      const newItem = resultArr.find(item => item.id === songId);
      dispatch(addSong(newItem));
    }
  };
  
  return (
    <div className='search-results'>
      <h2>Results</h2>
      <Results resultArr={resultArr} handleClick={handleClick} icon='plus'/>
    </div>
  )
}

export default SearchResults;