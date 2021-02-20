import React from "react";
import propTypes from "prop-types";
import StatisticCard from "./Statistics";

const StaticList = ({ title, statics }) => (
  <section>
    {title && <h2>{title}</h2>}
    <ul>
      {statics.map((data) => {
        return (
          <li key={data.id}>
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
    })
  ).isRequired,
};
export default StaticList;
