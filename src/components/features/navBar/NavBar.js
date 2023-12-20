import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  
  return (
    <nav>
      <NavLink to='#' className='nav-item'>About</NavLink>
      <NavLink to='#' className='nav-item'>Services</NavLink>
      <NavLink to='#' className='nav-item'>Products</NavLink>
    </nav>
  )
}

export default NavBar;