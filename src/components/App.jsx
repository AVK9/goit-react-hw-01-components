import PageCard from './Profile/Profile'
import TaskHead from './TaskHead/TaskHead';



export const App = () => {
  return (
    <>
      <TaskHead text="1 - Профіль соціальної мережі" />
      <PageCard />
      <TaskHead text="2 - Секція статистики" />
    </>
  );
};
