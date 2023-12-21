import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../features/navBar/NavBar';

export default function Root() {
  return (
    <>
      <header>
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