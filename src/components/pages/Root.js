import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    navigate('/spotify-playlist');  
  };

  return (
    <>
      <h1>Spotify Playlist</h1>
      <main>
        <Outlet/>
      </main>
    </>
  );
}