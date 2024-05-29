import TaskForm from '../components/TaskForm';
import Navbar from '../components/Navbar';

const AddTask = () => {
  return (
    <div>
      <Navbar />
      <h1>Add Task</h1>
      <TaskForm />
    </div>
  );
};

export default AddTask;