// imr: shortcut for creating React import
import React from 'react';

import Task from '../task/task.componet';

// sfc: shortcut to create component structure
// handleTaskClick: is called prop driven in React when the function is not used in the component
const Tasks = ({ tasks, handleTaskClick }) => {
  return ( 
    <>
      {
        tasks.map((task) => (
          <Task 
            task={task}
            handleTaskClick={handleTaskClick}
          />
        ))
      }
    </>
  );
};
 
export default Tasks;