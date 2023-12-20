import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from '../features/navBar/NavBar';

export default function Root() {
  return (
    <>
      <header>
        <NavLink to='/' className='logo'>Spotify Playlist</NavLink>
        <NavBar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Created by Eva Lin</p>
      </footer>
    </>
  );
}