import React, { Component } from 'react';
import '../assets/css/search.css';
import simbol from '../assets/images/searchSign.png';

class Search extends Component {
  render() {
    return (
      <div className="row searchContainer">
        <div className="col s8">
          <input className="searchInput" placeholder="Search..." />
        </div>
        <div className="col s1">
          <button className="btn indigo darken-1 searchBtn">
            <img src={simbol} className="searchBtnImg" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
