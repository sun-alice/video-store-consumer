import React from "react";
import "./Movie.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const Movie = props => {
  const {
    id,
    title,
    overview,
    release_date,
    image_url,
    external_id,
    selectMovieCallback
  } = props;

  return (
    <ul>
      <Accordion>
        <Card style={{ width: "20rem" }}>
          <Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Title className="movie-title">{title}</Card.Title>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                selectMovieCallback(id);
              }}
            >
              Select this Movie
            </Button>
          </Card.Header>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              See More
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Text>{overview}</Card.Text>
              <Card.Text>{release_date}</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ul>
  );
};

export default Movie;
