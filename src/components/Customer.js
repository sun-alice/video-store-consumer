import React from "react";
import "./Customer.css";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Customer = props => {
  const {
    id,
    name,
    city,
    state,
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
      <td>${account_credit}</td>
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

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out_count: PropTypes.number.isRequired,
}

export default Customer;
