import React from "react";
import data from "../data/index.js";
import FriendList from "./friendsList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactions/TransactionHistory.js";

const App = () => {
  return (
    <>
      <Profile {...data.user} />
      <Statistics title="UPLOAD STATS" stats={data.stats} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </>
  );
};

export default App;
