import React from "react";
import "./Rental.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const Rental = props => {
  const {
    title,
    customer_id,
    name,
    postal_code,
    checkout_date,
    due_date
  } = props;

  return (
    <ul>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Rented by: {name}</Card.Text>
          <Card.Text>Checkout Date: {checkout_date}</Card.Text>
          <Card.Text>Due Date: {due_date}</Card.Text>
        </Card.Body>
      </Card>
    </ul>
  );
};

export default Rental;
