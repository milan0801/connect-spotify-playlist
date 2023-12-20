import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    navigate('/spotify-playlist');  
  };

  return (
    <>
      <div className='home'>
        <p>Find Your Fav Songs!</p>
        <button onClick={handleClick}>Try it</button>
      </div>
    </>
  );
}