import React from "react";
import "./Rental.css";
import PropTypes from "prop-types";

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
    <div>
      <section>
        <h3> {title} </h3>
        <p>
          customer id: {customer_id}
          name: {name}
          postal_code: {postal_code}
          checkout_date: {checkout_date}
          due_date: {due_date}
        </p>
      </section>
    </div>
  );
};

export default Rental;
