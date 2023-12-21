import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearResults } from '../searchResults/searchResultsSlice';

function NavBar() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
    dispatch(clearResults());
  }

  window.addEventListener('resize', closeMenu);
  return (
    <nav>
      <NavLink to='/' className='logo' onClick={closeMenu}>Spotify Playlist</NavLink>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click? 'fa fa-times': 'fa fa-bars'}/>
      </div>
      <ul className={click? 'nav-menu-active': 'nav-menu'}>
        <li>
          <NavLink to='#' className='menu-item'>About</NavLink>
        </li>
        <li>
          <NavLink to='#' className='menu-item'>Services</NavLink>
        </li>
        <li>
          <NavLink to='#' className='menu-item'>Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;