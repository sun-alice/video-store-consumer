import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

const Movie = props => {
  const { id, title, overview, release_date, image_url, external_id, selectMovieCallback } = props; 

  return (
    <div>
      <section>
        <h3> {title} </h3>
        <p> 
          id: {id} 
          overview: {overview}
          release_date: {release_date}
          external_id: {external_id}
        </p>
        <img src={image_url} alt="movie_image" />
        <button
          type='button'
          onClick={() => { selectMovieCallback(id) } }
        >Select</button>
      </section>
    </div>
  );
};

export default Movie;