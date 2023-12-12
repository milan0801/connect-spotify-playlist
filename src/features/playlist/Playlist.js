import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSongs, deleteSong, clearSong } from '../playlist/playlistSlice';
import Results from '../../components/Results';

function Playlist() {
  const [title, setTitle] = useState('');
  const currentPlaylist = useSelector(selectSongs);
  const dispatch = useDispatch();

  const handleClick = (removeId) => {
    dispatch(deleteSong(removeId));
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const createPlaylist = async (title) => {
    const userId = 'cg4gi751vmr348khd4xl50bbr';
    const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const accessToken = localStorage.getItem('access_token');
    const data = {
      "name": `${title}`,
      "public": false
    }

    const result = await fetch(createPlaylistUrl, {
      method: "POST", 
      headers: {"Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const response = await result.json();
    return response.id;
  };

  const addItemToPlaylist = async (playlistId, playlist) => {
    if (playlist.length === 0) {
      return;
    }

    const addItemUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    const accessToken = localStorage.getItem('access_token');

    const uriList = [];
    playlist.forEach(song => {
      uriList.push(song.uri);
    });
    const data = {
      "uris": uriList
    }

    const result = await fetch(addItemUrl, {
      method: "POST", 
      headers: {"Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const response = await result.json();
    return response;
  }

  const handleSubmit = (playlistTitle, playlist) => {
    const newPlaylist = async (playlistTitle, playlist) => {
      const playlistId = await createPlaylist(playlistTitle);
      const addTrack = await addItemToPlaylist(playlistId, playlist);
    }
    newPlaylist(playlistTitle, playlist);
    setTitle('');
    dispatch(clearSong());
  }

  return (
    <>
      <h2>Playlist</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(title, currentPlaylist)}}>
        <div className='input-title'>
          <input type='text' placeholder='Title' value={title} onChange={handleChange} />
        </div>
        <div className='playlist-display'>
          <Results resultArr={currentPlaylist} handleClick={handleClick} icon='minus'/>
        </div>
        <div className='submit-button'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </>
  );
}

export default Playlist;