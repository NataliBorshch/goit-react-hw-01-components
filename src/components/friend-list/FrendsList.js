import React from "react";
import propTypes from "prop-types";
import FrendsCard from "./Frends-card";

const FrendsList = ({ frends }) => (
  <ul>
    {frends.map((frend) => (
      <li key={frend.id}>
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
    })
  ).isRequired,
};
export default FrendsList;
