import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics.module.css";
import randomColor from "../RandomColor";

const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li className={styles.stat} style={{ backgroundColor: randomColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsListItem;
