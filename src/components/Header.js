import React from 'react';
import {
  Navbar,
  Nav,
  NavLink, 
  Button,
} from 'react-bootstrap';

function Header() {
  return (
    <React.Fragment>
      <Navbar fixed="right" bg="dark" variant="dark">
        <Nav>
          {/* <Button href="#action1" className="btn btn-outline-info btn-sm">Home</Button> */}
          <Nav.Link href="#action2">Notification</Nav.Link> 
          <Nav.Link href="#action3">Messages</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;

