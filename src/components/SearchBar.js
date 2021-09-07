import React from 'react';
import {
  Form,
  FormControl,
  Button
  } from 'react-bootstrap';

function SearchBar() {
  return (
    <div className = "search">
      <div className = "search_input">
        <input placeholder = "search..." type = "text" />
      </div>
    </div>
  );
}

export default SearchBar;