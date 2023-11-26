
import {TaskHead} from './TaskHead/TaskHead';
import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <>
      <TaskHead text="1 - Профіль соціальної мережі" />
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />

      <TaskHead text="2 - Секція статистики" />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />


      <TaskHead text="3 - Список друзів" />
      <FriendList friends={friends} />

      <TaskHead text="4 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
    </>
  );
};
