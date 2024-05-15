// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='all'>
      <Header>Todo List</Header>
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;

