import React from 'react';
import {
  Navbar,
  Nav,
  NavLink,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import SearchBar from "./SearchBar";

function Header() {
  return (
    <React.Fragment>
      <Navbar fixed="right" bg="dark" variant="dark">
        <Nav>
          <div class="buttons">
            <Button variant="outline-light" size="sm" margin="10px" href="#action1">Home</Button>
            <Button variant="outline-light" size="sm" margin="10px" href="#action2">Notification</Button> 
            <Button variant="outline-light" size="sm" margin="10px" href="#action3">Messages</Button>
          </div>
        </Nav>
        <SearchBar />
      </Navbar>
    </React.Fragment>
  );
}

export default Header;