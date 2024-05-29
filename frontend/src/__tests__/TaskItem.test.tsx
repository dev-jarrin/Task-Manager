import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/Task';

const mockTask: Task = {
  _id: '1',
  title: 'Test Task',
  description: 'This is a test task',
  completed: false,
};

describe('TaskItem Component', () => {
  it('should render task details', () => {
    render(
      <Router>
        <TaskItem task={mockTask} />
      </Router>
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('This is a test task')).toBeInTheDocument();
    expect(screen.getByText('Not Completed')).toBeInTheDocument();
  });

  it('should render completed task', () => {
    const completedTask = { ...mockTask, completed: true };

    render(
      <Router>
        <TaskItem task={completedTask} />
      </Router>
    );

    expect(screen.getByText('Completed')).toBeInTheDocument();
  });
});