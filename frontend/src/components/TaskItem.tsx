import Link from 'next/link';
import { Task } from '../types/Task';
import { useTaskContext } from '../context/TaskContext';
import { deleteTask } from '../utils/api';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { dispatch } = useTaskContext();

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      dispatch({ type: 'DELETE_TASK', payload: task._id });
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className=' gap-2'>
      <a href={`/edit-task/${task._id}`}>Edit</a>
      <button onClick={handleDelete}>Delete</button>
        </div>

     
    </div>
  );
};

export default TaskItem;