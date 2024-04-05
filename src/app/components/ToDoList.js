'use client'
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const task = event.target.elements.task.value;
    if (task) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      event.target.elements.task.value = '';
    }
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form onSubmit={handleAddTodo} className="mt-4">
      <input
        type="text"
        placeholder="Add to-do task"
        name="task"
        required
        className="border rounded py-2 px-3 mr-2"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            onToggleCompleted={() => handleToggleCompleted(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </form>
  );
};

export default ToDoList;
