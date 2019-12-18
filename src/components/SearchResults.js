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
        addMovieCallback={props.addMovieCallback}
      />
    );
  });

  return searchResults;
};

SearchResults.propType = {
  result: PropTypes.arrary,
  addMovieCallback: PropTypes.func.isRequired
}

export default SearchResults;