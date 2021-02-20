import React from "react";
import propTypes from "prop-types";

const TransactionCard = ({ type, amount, currency }) => {
  return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
};

TransactionCard.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default TransactionCard;
