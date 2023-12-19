import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    navigate('/spotify-playlist');  
  };

  return (
    <>
      <h1>Find Your Fav Songs!</h1>
      <button onClick={handleClick}>Try it</button>
    </>
  );
}