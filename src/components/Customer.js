import React from "react";
import "./Customer.css";
import PropTypes from "prop-types";

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
    <div>
      <section>
        <h3> {name} </h3>
        <p>
          id: {id}
          registered_at: {registered_at}
          account_credit: {account_credit}
          movies_checked_out_count: {movies_checked_out_count}
          <button
            className="btn btn-primary"
            onClick={() => {
              selectCustomerCallback(id);
            }}
          >
            Select
          </button>
        </p>
      </section>
    </div>
  );
};

export default Customer;
