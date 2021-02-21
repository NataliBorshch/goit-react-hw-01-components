import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionCard = ({ type, amount, currency }) => {
  return (
    <>
      <th className={styles.type}>{type}</th>
      <th className={styles.amount}>{amount}</th>
      <th className={styles.currency}>{currency}</th>
    </>
  );
};

TransactionCard.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default TransactionCard;
