import PageCard from './Profile/Profile'
import TaskHead from './TaskHead/TaskHead';
import Statistics from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <>
      <TaskHead text="1 - Профіль соціальної мережі" />
      <PageCard />
      <TaskHead text="2 - Секція статистики" />
      <Statistics />
      <TaskHead text="3 - Список друзів" />
      <FriendList friends={friends} />
      <TaskHead text="4 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
    </>
  );
};
