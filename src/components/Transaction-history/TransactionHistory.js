import React from 'react';
import propTypes from 'prop-types';
import TransactionCard from './TransactionCard';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead className={styles.title}>
      <tr>
        <th className={styles.label}>Type</th>
        <th className={styles.label}>Amount</th>
        <th className={styles.label}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
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
    propTypes.shape({ id: propTypes.string.isRequired }).isRequired,
  ),
};
export default TransactionHistory;
