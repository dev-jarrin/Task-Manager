import { useRouter } from 'next/router';
import TaskForm from '../../components/TaskForm';
import Navbar from '../../components/Navbar';

const EditTask = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <h1>Edit Task</h1>
      <TaskForm initialData={{ _id: id as string, title: '', description: '', completed: false }} />
    </div>
  );
};

export default EditTask;