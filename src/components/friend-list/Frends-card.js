import React from 'react';
import propTypes from 'prop-types';
import styles from './Frends.module.css';
import { getRoles } from '@testing-library/react';

const FrendsCard = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span
        className={styles.state}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img src={avatar} alt={name} width="48" className={styles.avatar} />
      <p className={styles.textName}>{name}</p>
    </>
  );
};

FrendsCard.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};

FrendsCard.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string,
  isOnline: propTypes.bool.isRequired,
};

export default FrendsCard;
