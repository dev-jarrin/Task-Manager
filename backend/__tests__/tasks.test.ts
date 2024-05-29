import request from 'supertest';
import app from '../src/index';
import mongoose from 'mongoose';
import Task from '../src/models/taskModel';

beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI || '';
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await Task.deleteMany({});
    console.log('tasl=k closed');
    await mongoose.connection.close();
    console.log('connection closed');
});

describe('Task API', () => {
    it('should create a new task', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task',
                completed: false,
            });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Task');
        expect(response.body.description).toBe('This is a test task');
        expect(response.body.completed).toBe(false);
    });

    it('should get all tasks', async () => {
        const response = await request(app).get('/api/tasks');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should get a task by id', async () => {
        const newTask = await Task.create({
            title: 'Another Test Task',
            description: 'Another test task description',
            completed: false,
        });

        const response = await request(app).get(`/api/tasks/${newTask._id}`);

        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Another Test Task');
        expect(response.body.description).toBe('Another test task description');
        expect(response.body.completed).toBe(false);
    });

    it('should update a task', async () => {
        const newTask = await Task.create({
            title: 'Task to Update',
            description: 'Task description',
            completed: false,
        });

        const response = await request(app)
            .put(`/api/tasks/${newTask._id}`)
            .send({
                title: 'Updated Task',
                description: 'Updated description',
                completed: true,
            });

        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Task');
        expect(response.body.description).toBe('Updated description');
        expect(response.body.completed).toBe(true);
    });

    it('should delete a task', async () => {
        const newTask = await Task.create({
            title: 'Task to Delete',
            description: 'Task description',
            completed: false,
        });

        const response = await request(app).delete(`/api/tasks/${newTask._id}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Task deleted');

        const deletedTask = await Task.findById(newTask._id);
        expect(deletedTask).toBeNull();
    });
});