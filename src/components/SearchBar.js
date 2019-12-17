import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import Button from "react-bootstrap/Button";

const SearchBar = ({ searchTerm, searchChangeCallback }) => {

  return (
    <section>
      <div>
        <label htmlFor="searchBar">Search</label>
      </div>
      <input
        onChange={(event) => { searchChangeCallback(event.target.value) }}
        value={searchTerm}
        name="searchBar"
        id="searchBar"
        className="search-bar"
      />
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          searchMovie(value);
        }}
      >Select this Movie</Button>
    </section>
  );
};

SearchBar.propTypes = {
  searchChangeCallback: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;