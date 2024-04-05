import React from 'react'
import ToDoList from './components/ToDoList';

const ToDoApp = () => (
  <div className="bg-black text-blue-500 font-sans max-w-screen-md mx-auto p-8 flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl mb-4">My To-Do List</h1>
    <ToDoList />
  </div>
)

export default ToDoApp