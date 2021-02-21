import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticCard = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

StatisticCard.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
export default StatisticCard;
