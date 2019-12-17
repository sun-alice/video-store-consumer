import React from "react";
import "./Customer.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Customer = props => {
  const {
    id,
    name,
    registered_at,
    address,
    city,
    state,
    postal_code,
    phone,
    account_credit,
    movies_checked_out_count,
    selectCustomerCallback
  } = props;

  return (
    <ul>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Phone: {phone}</Card.Text>
          <Card.Text>Account Credit: ${account_credit}</Card.Text>
          <Card.Text>Checked Out Movies: {movies_checked_out_count}</Card.Text>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              selectCustomerCallback(id);
            }}
          >
            Select this Customer
          </Button>
        </Card.Body>
      </Card>
    </ul>
  );
};

export default Customer;
