import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  height: 100%;
  font-family: sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  &.active {
    filter: brightness(150%);
  }
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }
`;
