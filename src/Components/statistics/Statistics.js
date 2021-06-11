import React from "react";
import PropTypes from "prop-types";
import StatisticsListItem from "./statisticsListItem/StatisticsListItem.js";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map((stat) => {
          return <StatisticsListItem key={stat.id} {...stat} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
