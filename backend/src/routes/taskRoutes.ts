
import { Router } from 'express';
import { body, param } from 'express-validator';
import { getTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/taskController';
import { validate } from '../middleware/validate';

const router: Router = Router();

router.get('/', getTasks);

router.post(
    '/',
    validate([
        body('title').isString().notEmpty(),
        body('description').isString().notEmpty(),
    ]),
    createTask
);

router.get(
    '/:id',
    validate([param('id').isMongoId()]),
    getTask
);

router.put(
    '/:id',
    validate([
        param('id').isMongoId(),
        body('title').optional().isString().notEmpty(),
        body('description').optional().isString().notEmpty(),
    ]),
    updateTask
);

router.delete(
    '/:id',
    validate([param('id').isMongoId()]),
    deleteTask
);

export default router;