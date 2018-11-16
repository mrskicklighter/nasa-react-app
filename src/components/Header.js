import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Header = ( ) => (
<Navbar inverse collapseOnSelect>
  <Navbar.Collapse>
    <Nav className="nav">
   
      <NavLink exact to="/">Home</NavLink>

    
      <NavLink to="/today">Today's Image</NavLink>
   
      
      <NavLink to="/searchDate">Look up a Date</NavLink>
     
      <NavLink to="/multiple">group of dates</NavLink>
      
     
    </Nav>

  </Navbar.Collapse>
</Navbar>
);

export default Header;