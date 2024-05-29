import { Router } from 'express';
import { getTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/taskController';

const router: Router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;