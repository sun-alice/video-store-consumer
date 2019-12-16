import React from "react";
import "./CustomerCollection.css";
import PropTypes from "prop-types";
import Customer from "./Customer";

const CustomerCollection = props => {
  const customerCollection = props.customers.map((customer, i) => {
    return (
      <Customer
        key={i}
        {...customer}
        selectCustomerCallback={props.selectCustomerCallback}
      />
    );
  });

  return <div>{customerCollection}</div>;
};

export default CustomerCollection;
