import React from "react";
import "./RentalCollection.css";
import PropTypes from "prop-types";
import Rental from "./Rental";

const RentalCollection = props => {
  const rentalCollection = props.rentals.map((rental, i) => {
    return (
      <div>
        <Rental key={i} {...rental} />
      </div>
    );
  });

  return <div>{rentalCollection}</div>;
};

export default RentalCollection;
