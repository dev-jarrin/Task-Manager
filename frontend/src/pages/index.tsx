import TaskList from '../components/TaskList';
import Navbar from '../components/Navbar';
import { TaskProvider } from '../context/TaskContext';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Task Manager</h1>
      <TaskProvider>
      <TaskList />
    </TaskProvider>
    
    </div>
  );
};

export default Home;