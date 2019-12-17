import React from "react";
import "./SearchResult.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SearchResult = props => {
  const {
    title,
    overview,
    release_date,
    image_url
  } = props;

  return (
    <ul>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Card.Text>{release_date}</Card.Text>
          {/* <Button
            variant="primary"
            type="button"
            onClick={() => {
              selectMovieCallback(id);
            }}
          >
            Select this Movie
          </Button> */}
        </Card.Body>
      </Card>
    </ul>
  );
}

export default SearchResult;