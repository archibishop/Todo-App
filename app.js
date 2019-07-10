import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// Setup express project.
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

// Create todos
app.post('/api/v1/todos', (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'Title field is required.'

        });
    } else if (!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'Description field is required.'
        });
    }

    const todo = {
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
    }

    db.push(todo);

    return res.status(201).send({
        success: 'true',
        message: 'Todo has been successfully created.',
        todo
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
