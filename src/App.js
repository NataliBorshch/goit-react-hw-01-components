import React from 'react';
import UserProfile from './components/social-profile/User-card';
import FrendsList from './components/friend-list/FrendsList';
import StaticList from './components/Statistics/Statistics-List';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import user from './components/data/user.json';
import frends from './components/data/friends.json';
import statisticalData from './components/data/statistical-data.json';
import transaction from './components/data/transactions.json';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <h1 className={styles.title}>Task-1</h1>
        <UserProfile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </div>
      <div className={styles.task}>
        <h1 className={styles.title}>Task-2</h1>
        <StaticList statics={statisticalData} title="Upload stats" />
      </div>

      <div className={styles.task}>
        <h1 className={styles.title}>Task-3</h1>
        <FrendsList frends={frends} />
      </div>
      <div className={styles.task}>
        <h1 className={styles.title}>Task-4</h1>
        <TransactionHistory items={transaction} />
      </div>
    </div>
  );
};

export default App;
