import React from "react";
import propTypes from "prop-types";

const StatisticCard = ({ label, percentage }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};

StatisticCard.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
export default StatisticCard;
