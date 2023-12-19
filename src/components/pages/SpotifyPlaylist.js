import Playlist from '../features/playlist/Playlist';
import SearchBar from '../features/searchBar/SearchBar';
import SearchResults from '../features/searchResults/SearchResults';
import login from './login';
import React, { useState, useEffect } from 'react';

function SpotifyPlaylist({count}) {
  const [ isLogin, setIsLogin ] = useState(false);
  
  useEffect(() => {
    const performLogin = async () => {
      try {
        const accessToken = await login();
        if (accessToken) {
          setIsLogin(true);
        }
      } catch(error) {
        console.error('Login failed: ', error);
      }
    };

    performLogin();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => { await login() }, 1800000);
    return () => clearInterval(interval);
  }, []);

  if (!isLogin) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className='search-bar'>
        <SearchBar />
      </div>
      <div className='results'>
        <SearchResults/>
        <Playlist/>
      </div>
    </>
  );
}

export default SpotifyPlaylist;