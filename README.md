# Task Manager API

A RESTful API for managing tasks with user authentication.

## Features

- User authentication (register/login)
- CRUD operations for tasks
- Task filtering and sorting
- JWT-based authentication
- MongoDB database

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/task-manager
   JWT_SECRET=your-secret-key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks

- `GET /api/tasks` - Get all tasks (with filtering and sorting)
- `GET /api/tasks/:id` - Get a single task
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Request Examples

### Register User
```json
POST /api/auth/register
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

### Create Task
```json
POST /api/tasks
{
    "title": "Complete project",
    "description": "Finish the task manager API",
    "priority": "high",
    "dueDate": "2024-03-20"
}
```

### Filter Tasks
```
GET /api/tasks?status=pending&priority=high&sortBy=dueDate&sortOrder=asc
```

## Authentication

All task endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer your-jwt-token
``` 