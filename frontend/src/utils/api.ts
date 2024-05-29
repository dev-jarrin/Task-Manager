import axios from 'axios';
import { Task } from '../types/Task';

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || '' });

export const getTasks = async (): Promise<Task[]> => {
  console.log(api);
  const response = await api.get('/tasks');
  return response.data;
};

export const getTask = async (id?: string): Promise<Task> => {
  const url = id ? `/tasks/${id}` : '/tasks';
  const response = await api.get(url);
  return response.data;
};

export const addTask = async (task: Task): Promise<Task> => {
  const response = await api.post('/tasks', task);
  return response.data;
};

export const updateTask = async (id: string, task: Partial<Task>): Promise<Task> => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};