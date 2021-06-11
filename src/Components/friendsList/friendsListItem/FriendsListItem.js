import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendsListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width={50} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsListItem;
