// imr: shortcut for creating React import
import React from 'react';

import Task from '../task/task.componet';

// sfc: shortcut to create component structure
// handleTaskClick: is called prop driven in React when the function is not used in the component
const Tasks = ({ tasks, handleTaskClick, handleTaskDelition }) => {
  return ( 
    <>
      {
        tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick}
            handleTaskDelition={handleTaskDelition}
          />
        ))
      }
    </>
  );
};
 
export default Tasks;