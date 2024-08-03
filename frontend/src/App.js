import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
    .then(response => setTodos(response.data))
    .catch(error => console.log(error));
  }, []);

  const addTodo = () => {
  axios.post('http://localhost:5000/api/todos', { text })
  .then(response => {
    setTodos([...todos, response.data]);
    setText('');
  })
  .catch(error => console.log(error));
 };

 const deleteTodo = (id) => {
  axios.delete(`http://localhost:5000/api/todos/${id}`)
  .then(() => setTodos(todos.filter(todo => todo._id !== id)))
  .catch(error => console.log(error));
 };

   return (
   <>
   <div>
    <h1>To-Do List</h1>
    <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
      ))}
    </ul>

   </div>

   </>
  );
}

export default App;
