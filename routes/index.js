import express from 'express';
import db from '../db/db';
import TodoController from '../todosControllers/todos';

const router = express.Router();

// get all todos
router.get('/api/v1/todos', TodoController.getAllTodos);

// Create todos
router.post('/api/v1/todos', TodoController.createTodo);

// Get a single todo.
router.get('/api/v1/todos/:id', TodoController.getTodo);

// Delete single todo
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

// Update todo
router.put('/api/v1/todos/:id', TodoController.updateTodo);

export default router;
