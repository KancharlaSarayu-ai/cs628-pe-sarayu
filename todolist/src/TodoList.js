import React from 'react';

function TodoList({ tasks, deleteTask }) {
  return (
    <div className="tasklist">
      {tasks.map((task, index) => (
        <div key={index} className="taskproduct">
          <p>{task}</p>
          <button onClick={() => deleteTask(index)}> Delete </button>
          </div>
        ))}
        </div>
  );
}

export default TodoList;

