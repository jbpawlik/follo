import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Notification</Nav.Link> 
        <Nav.Link href="#action3">Messages</Nav.Link>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;

