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

<<<<<<< HEAD
SearchResults.propTypes = {
  result: PropTypes.array,
  addMovieCallback: PropTypes.func.isRequired
};

export default SearchResults;
=======
SearchResults.propType = {
  result: PropTypes.arrary,
  addMovieCallback: PropTypes.func.isRequired
}

export default SearchResults;
>>>>>>> 61bd6edaeff496062ba84bd5b20b99e0d6aef6c2
