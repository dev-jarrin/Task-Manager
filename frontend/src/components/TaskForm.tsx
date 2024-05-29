import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Task } from '../types/Task';
import { addTask, updateTask, getTask } from '../utils/api';

interface TaskFormProps {
  initialData?: Task;
}

const TaskForm = ({ initialData }: TaskFormProps) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const taskData: Task = { _id: initialData?._id || '', title, description, completed: initialData?.completed || false };

    try {
      if (initialData?._id) {
        await updateTask(initialData._id, taskData);
      } else {
        await addTask(taskData);
      }
      router.push('/');
    } catch (err) {
      console.error('Error saving task:', err);
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        const task = await getTask(id as string);
        setTitle(task.title);
        setDescription(task.description);
      }
    };

    fetchTask();
  }, [id]);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        {initialData ? 'Update' : 'Add'} Task
      </button>
      <a href="/" className="block mt-4 text-blue-500 hover:text-blue-600">Back to Home</a>
    </form>
  );
};

export default TaskForm;
