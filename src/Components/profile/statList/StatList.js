import React from "react";
import PropTypes from "prop-types";
import styles from "../../profile/Profile.module.css";

const StatList = ({ item }) => {
  return (
    <li className={styles.description}>
      <span className={styles.label}>{Object.keys(item)[0]}:</span>
      <span className={styles.quantity}>{Object.values(item)[0]}</span>
    </li>
  );
};

StatList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default StatList;
