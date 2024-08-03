import mongoose from "mongoose";

//Define a simple todo schema
const todoSchema = new mongoose.Schema({
    text:String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;