import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/games" activeStyle>
          Play games
        </NavLink>
        <a className="anchor" href="https://www.divitagrawal.co/" target="_blank" activeStyle>
          Developer
        </a>
      </Nav>
    </>
  );
};

export default Navbar;
