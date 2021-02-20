import React from "react";
import propTypes from "prop-types";

const FrendsCard = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FrendsCard.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
};

FrendsCard.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string,
  isOnline: propTypes.bool.isRequired,
};

export default FrendsCard;
