import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./friendsListItem/FriendsListItem";
import styles from "./FriendsList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return <FriendsListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
