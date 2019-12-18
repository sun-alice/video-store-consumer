import React from "react";
import "./Customer.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

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
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{phone}</td>
      <td>{account_credit}</td>
      <td>{movies_checked_out_count}</td>
      <td>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            selectCustomerCallback(id);
          }}
        >
          Select
        </Button>
      </td>
    </tr>
  );
};

export default Customer;
