import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { getTodos, addTodo, deleteTodo } from './services/todoServices';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    getTodos()
    .then(response => setTodos(response.data))
    .catch(error => console.log(error));
  }, []);

  const handleAddTodo = (text) => {
    addTodo(text)
    .then(response => setTodos([...todos, response.data]))
    .catch(error => console.log(error));
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
    .then(()=> setTodos(todos.filter(todo => todo._id !== id)))
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}


export default App;






  