import React from "react";
import "./MovieCollection.css";
import PropTypes from "prop-types";
import Movie from "./Movie";

const MovieCollection = props => {
  const movieCollection = props.movies.map((movie, i) => {
    return (
      <Movie
        key={i}
        {...movie}
        selectMovieCallback={props.selectMovieCallback}
      />
    );
  });

  return <div className="movie-collection">{movieCollection}</div>;
};

export default MovieCollection;
