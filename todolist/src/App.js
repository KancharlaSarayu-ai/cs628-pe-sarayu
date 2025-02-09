import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList'; 

function TodoListApp() {
  const [task, setTask] = useState('');  
  const [tasks, setTasks] = useState([]); 

 
  const InputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);  
      setTask(''); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);  // Remove the task at the given index
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>ToDo App List</h1>
      <input
        type="text"
        value={task}  
        onChange={InputChange}  
        placeholder="Please enter your task here"
      />
      <button onClick={addTask}>Add Task</button> 
      
    
      <TodoList tasks={tasks} deleteTask={deleteTask} />  {/* Pass tasks and deleteTask to TodoList */}
    </div>
  );
}

export default TodoListApp;
