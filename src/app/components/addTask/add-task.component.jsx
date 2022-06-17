import React, { useState } from 'react';

import Button from '../button/button.component';

import "./add-task.component.scss"

const AddTask = ({ handleTaskAddition }) => {
  // These are local variables in React
  const [inputData, setInputData] = useState("");

  // This is a function in React
  const handleInputChange = (event) => {
    setInputData(event.target.value);
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  }

  return ( 
    <div className="add-task-container">
      <input 
        type="text"
        value={inputData}
        className="add-task-input"
        onChange={handleInputChange} 
      />
      <div className="add-task-button-container">
        <Button
          onClick={handleAddTaskClick}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}
 
export default AddTask;