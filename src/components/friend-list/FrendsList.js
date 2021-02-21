import React from 'react';
import propTypes from 'prop-types';
import FrendsCard from './Frends-card';
import styles from './Frends.module.css';

const FrendsList = ({ frends }) => (
  <ul className={styles.list}>
    {frends.map(frend => (
      <li key={frend.id} className={styles.item}>
        <FrendsCard
          name={frend.name}
          isOnline={frend.isOnline}
          avatar={frend.avatar}
        />
      </li>
    ))}
  </ul>
);
FrendsList.propTypes = {
  frends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FrendsList;
