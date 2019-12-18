import React from "react";
import "./SearchResult.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const SearchResult = props => {
  const { title, overview, release_date, image_url, external_id } = props;

  const onAddMovie = () => {
    props.addMovieCallback({
      title: title,
      overview: overview,
      release_date: release_date,
      image_url: image_url,
      external_id: external_id
    });
  };

  return (
    <ul>
      <Accordion>
        <Card bg="dark" text="white" style={{ width: "20rem" }}>
          <Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Title className="movie-title">{title}</Card.Title>
            <Button variant="primary" type="button" onClick={onAddMovie}>
              Add this Movie
            </Button>
          </Card.Header>
        </Card>
        <Card bg="dark" text="white" style={{ width: "20rem" }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              See More
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Text>{overview}</Card.Text>
              <Card.Text>Release Date: {release_date}</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ul>
  );
};

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number,
}

export default SearchResult;
