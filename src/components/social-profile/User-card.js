import React from "react";
import propTypes from "prop-types";

const UserProfile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} width="100px" alt="Аватар пользователя" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserProfile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
};

UserProfile.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};
export default UserProfile;
