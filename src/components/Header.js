import React from 'react';
import {
  Navbar,
  Nav,
  NavLink,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <React.Fragment>
      <Navbar fixed="right" bg="dark" variant="dark">
        <Nav>
          <Button variant="outline-dark" href="#action1">Home</Button>
          <Button variant="outline-dark" href="#action2">Notification</Button> 
          <Button variant="outline-dark" href="#action3">Messages</Button>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;

