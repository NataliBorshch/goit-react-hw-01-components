import React from 'react';
import propTypes from 'prop-types';
import StatisticCard from './Statistics';
import styles from './Statistics.module.css';

const getColor = () => {
  const hex = Math.floor(Math.random() * 0xffffff);
  const color = '#' + ('000000' + hex.toString(16)).substr(-6);
  return color;
};

const StaticList = ({ title, statics }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {statics.map(data => {
        return (
          <li
            key={data.id}
            className={styles.item}
            style={{ backgroundColor: getColor() }}
          >
            <StatisticCard label={data.label} percentage={data.percentage} />
          </li>
        );
      })}
    </ul>
  </section>
);

StaticList.propTypes = {
  title: propTypes.string,
  statics: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
};
export default StaticList;
