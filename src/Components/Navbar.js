import React from 'react';
import {
  Nav,
  NavLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/games' activeStyle>
            Play games
          </NavLink>
          <NavLink to='/about' activeStyle>
            Developer
          </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;