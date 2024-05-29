import { useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { getTasks } from '../utils/api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        dispatch({ type: 'SET_TASKS', payload: tasks });
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <div className="divide-y divide-gray-300">
        {state.tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
