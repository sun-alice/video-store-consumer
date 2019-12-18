import React from "react";
import "./CustomerCollection.css";
import PropTypes from "prop-types";
import Customer from "./Customer";
import Table from "react-bootstrap/Table";

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

  return (
    <div className="background">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Account Credit</th>
            <th>Checked Out Movies</th>
          </tr>
        </thead>
        <tbody>{customerCollection}</tbody>
      </Table>
    </div>
  );
};

export default CustomerCollection;
