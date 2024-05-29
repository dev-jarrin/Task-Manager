# Interactive Task Manager

## Overview
The Interactive Task Manager is a web-based task management application that allows users to create, read, update, and delete tasks. The application is built with a Next.js front end and a Node.js back end, utilizing TypeScript for type safety and code organization.

## Features
- Create, read, update, and delete tasks.
- Responsive design for different screen sizes.
- Client-side routing for smooth navigation.
- State management using React Context API.
- RESTful API with Express.js.
- Database integration with MongoDB.
- Validation and error handling for API requests.
- Comprehensive test cases for both frontend and backend.

## Project Structure
Task-manager/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── taskController.ts
│   │   ├── models/
│   │   │   └── Task.ts
│   │   ├── routes/
│   │   │   └── tasksRoute.ts
|   |   |   └── tasksRoutes.ts
│   │   ├── middleware/
│   │   │   └── validate.ts
│   │   └── index.ts
│   ├── __tests__/
│   │   └── tasks.test.ts
│   └── package.json
├── frontend/
│   ├── src/
|    │   ├── components/
|    │   │   ├── TaskForm.tsx
|    │   │   ├── TaskItem.tsx
|    │   │   ├── TaskList.tsx
|    │   │   └── Navbar.tsx
|    │   ├── pages/
|    │   │   ├── index.tsx
|    │   │   ├── add-task.tsx
|    │   │   ├── edit-task/[id].tsx
|    │   │   └── _app.tsx
|    │   ├── context/
|    │   │   └── TaskContext.tsx
|    │   ├── styles/
|    │   │   └── globals.css
|    │   ├── utils/
|    │   │   └── api.ts
|    │   ├── __tests__/
|    │   │   ├── TaskList.test.tsx
|    │   │   └── TaskItem.test.tsx
│   ├── jest.config.js
│   ├── jest.setup.ts
│   ├── tsconfig.json
│   ├── tsconfig.jest.json
│   └── package.json
└── README.md


## Backend
### Setup
1. *Install Dependencies*:
    cd backend
    npm install

2. *Environment Variables*: Create a .env file in the root of the backend directory and add the following:
    MONGO_URI=mongodb://localhost:27017/taskmanager

3. *Run the Server*:
    npx ts-node src/index.ts 

### API Endpoints
- *GET /api/tasks*: Get all tasks.
- *GET /api/tasks/:id*: Get a task by ID.
- *POST /api/tasks*: Create a new task.
- *PUT /api/tasks/:id*: Update a task.
- *DELETE /api/tasks/:id*: Delete a task.

### Testing
1. *Run Tests*:
    npm test

### Sample API Request (Postman)
*POST /api/tasks*
    json
    {
    "title": "Sample Task",
    "description": "This is a sample task",
    "completed": false
    }

## Frontend
### Setup
1. *Install Dependencies*:
    cd frontend
    npm install

2. *Run the Development Server*:
    npm run dev