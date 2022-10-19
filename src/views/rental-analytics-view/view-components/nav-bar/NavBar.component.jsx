import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBar.styles';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activestyle="true">
            Home
          </NavLink>
          <NavLink to='/marketing' >
            Marketing
          </NavLink>
          <NavLink to='/logistics' >
            Rental Logistics
          </NavLink>
          <NavLink to='/planning' >
            Rental Planning
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;