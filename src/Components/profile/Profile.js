import React from "react";
import PropTypes from "prop-types";
import StatList from "./statList/StatList";
import styles from "./Profile.module.css";
import defaultImage from "./default.svg";

const { nanoid } = require("nanoid");

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt={tag} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.keys(stats)
          .map((key) => ({ [key]: stats[key] }))
          .map((item, id = nanoid) => (
            <StatList key={id} item={item} />
          ))}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
