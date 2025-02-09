import React from 'react';

function TodoTask({ task, deleteTask }) {
  return (
    <div className="taskproduct">
      <p>{task}</p>
      <button onClick={deleteTask}>Delete</button>
      </div>
  );
}

export default TodoTask;
