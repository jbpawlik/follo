import React from 'react';
import {
  Form,
  FormControl,
  Button,
  } from 'react-bootstrap';

function SearchBar() {
  return (
    <React.Fragment>
      <div><Form className = "d-flex flex-row bd-highlight mb-3"></div>
        
          <div>
            <input>
            type="seac"
            placeholder = "Search..."
            className = "p-2 bd-highlight"
            aria-label = "Search"
            />
          </div>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;