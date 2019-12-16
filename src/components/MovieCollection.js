import React from "react";
// import "./MovieCollection.css";
import PropTypes from "prop-types";
import Movie from "./Movie";

const MovieCollection = props => {
   
  const movieCollection = props.movies.map((movie, i) => {
    return <Movie
      key={i}
      id={movie.id}
      title={movie.title}
      overview={movie.overview}
      release_date={movie.release_date}
      image_url={movie.image_url}
      external_id={movie.external_id}
    />;
  });

  return (
    <div>
    { movieCollection }
  </div>
  )
}

export default MovieCollection;