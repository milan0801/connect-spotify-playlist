import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import SpotifyPlaylist from './components/pages/SpotifyPlaylist';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path='spotify-playlist' element={<SpotifyPlaylist />}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={ router }/>
  );
}

export default App;
