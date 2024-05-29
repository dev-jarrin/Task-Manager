import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import { Task } from '../types/Task';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockTasks: Task[] = [
  {
    _id: '1',
    title: 'Test Task 1',
    description: 'This is test task 1',
    completed: false,
  },
  {
    _id: '2',
    title: 'Test Task 2',
    description: 'This is test task 2',
    completed: true,
  },
];

describe('TaskList Component', () => {
  it('should render loading initially', () => {
    render(

        <TaskList />
  
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render tasks after fetching', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockTasks });

    render(
  
        <TaskList />

    );

    await waitFor(() => {
      expect(screen.getByText('Test Task 1')).toBeInTheDocument();
      expect(screen.getByText('This is test task 1')).toBeInTheDocument();
      expect(screen.getByText('Test Task 2')).toBeInTheDocument();
      expect(screen.getByText('This is test task 2')).toBeInTheDocument();
    });
  });

  it('should render no tasks found message', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });

    render(

        <TaskList />

    );

    await waitFor(() => {
      expect(screen.getByText('No tasks found')).toBeInTheDocument();
    });
  });
});