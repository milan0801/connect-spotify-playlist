import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchResults, isLoadingResults } from './searchResultsSlice';
import { selectSongs, addSong } from '../playlist/playlistSlice';

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
    return <h2>Loding</h2>;
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
    <>
      <h2>Results</h2>
      {
        resultArr.map((result, index) => {
          return (
            <Fragment key={`result-${index}`}>
              <div className='song' key={`result-${index}`}>
                <div className='detail'>
                  <h3>{result.name}</h3>
                  <p>{result.artist}</p>
                </div>
                <div className='plus-icon'>
                  <button id={`plus+${index}`} value={index} onClick={() => handleClick(result.id)}><i className='fa fa-plus'></i></button>
                </div>
              </div>
              <hr/>
            </Fragment>
          );
        })
      }
    </>
  )
}

export default SearchResults;