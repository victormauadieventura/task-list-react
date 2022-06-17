import React from 'react';
import {CgClose} from 'react-icons/cg';

import "./task.component.scss"

// task: similar to Angular's @input
const Task = ({ task, handleTaskClick, handleTaskDelition }) => {
  return (
    <div 
      className="task-container" 
      onClick={() => handleTaskClick(task.id)}
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title">
        { task.title }
      </div>

      <div className="buttons-container">
        <button 
          className="remove-task-button" 
          onClick={() => handleTaskDelition(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
}
 
export default Task;