import React from "react";
import propTypes from "prop-types";
import TransactionCard from "./TransactionCard";

const TransactionHistory = ({ items }) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <TransactionCard
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired }).isRequired
  ),
};
export default TransactionHistory;
