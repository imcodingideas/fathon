import React, { Component } from 'react';
import '../assets/css/search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input className="searchInput" placeholder="Search..." />
        <button className="searchBtn">?</button>
      </div>
    );
  }
}

export default Search;
