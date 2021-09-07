import Newsfeed from "./Newsfeed";
import Header from "./Header"
import '../../src/App.css';
import React from 'react';
import SearchBar from "./SearchBar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <Newsfeed />
    </React.Fragment>
  );
}

export default App;
