import React from 'react';

const ToDoItem = ({ task, completed, onToggleCompleted, onDelete }) => {
  return (
    <li className={`${completed ? 'line-through' : ''} border-b border-gray-400 p-2 flex items-center justify-between`}>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} className="mr-2" />
      <span className="flex-grow">{task}</span>
      <button onClick={onDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 ml-2 rounded">Delete</button>
    </li>
  );
};

export default ToDoItem;
