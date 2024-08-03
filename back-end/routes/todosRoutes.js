import express from 'express';
import Todo from "../models/todoModel.js"

const router = express.Router();

router.get("/todos", async (req, res) => {
    try {
    const todos = await Todo.find();
    res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//create a new todo
router.post("/todos", async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text,
        completed: false
    });
    try {
    await newTodo.save();
    res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// delete a todo by id
router.delete("/todos/:id", async (req, res) => {
    try {
    await Todo.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;