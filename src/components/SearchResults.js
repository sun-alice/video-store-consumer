import React from "react";
import "./SearchResults.css";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  const searchResults = props.result.map((movie, i) => {
    return (
      <SearchResult
        key={i}
        {...movie}
        selectMovieCallback={props.selectMovieCallback}
      />
    );
  });

  return searchResults;
};

export default SearchResults;