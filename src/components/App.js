import React from "react";
import UserProfile from "./social-profile/User-card";
import FrendsList from "./friend-list/FrendsList";
import StaticList from "./Statistics/Statistics-List";
import TransactionHistory from "./transaction-history/TransactionHistory";

import user from "./data/user.json";
import frends from "./data/friends.json";
import statisticalData from "./data/statistical-data.json";
import transaction from "./data/transactions.json";

const App = () => {
  return (
    <div>
      <h1>Task-1 Profile Card</h1>
      <UserProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <h1>Task-2</h1>
      <StaticList statics={statisticalData} title="Upload stats" />

      <h1>Task-3 frends</h1>
      <FrendsList frends={frends} />
      <h1>Task-4</h1>
      <TransactionHistory items={transaction} />
    </div>
  );
};

export default App;
