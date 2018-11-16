import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

// main header/navbar for every page, can direct to any route
// thru these routes, changes to hamburger menu on small screen

const Header = ( ) => (
<Navbar  inverse collapseOnSelect>

    <Navbar.Toggle />
  {/*Collaspe creates small menu on small screen, functionality still needs some work  */}
  <Navbar.Collapse>
    <Nav bsStyle="pills">
      <NavItem eventKey="1" >
      <NavLink exact to="/">Home</NavLink>
      </NavItem>
      <NavItem eventKey="2" >
      <NavLink to="/today">Today's Image</NavLink>
      </NavItem>
      <NavItem eventKey="3" >
      <NavLink to="/searchDate">Look up a Date</NavLink>
      </NavItem>           
      <NavItem eventKey="4" >
      <NavLink to="/multiple">Group of Dates</NavLink>
      </NavItem>
     
    </Nav>

  </Navbar.Collapse>
</Navbar>
);

export default Header;