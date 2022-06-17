import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./app/components/header/header.component";
import Tasks from "./app/components/tasks/tasks.componet";
import AddTask from "./app/components/addTask/add-task.component";
import TaskDetails from "./app/components/taskDetails/task-details.component";

import './app.scss';

const App = () => {
  // tasks: similar to a binding variable in Angular
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar Angular',
      completed: false,
    },
    {
      id: '3',
      title: 'Estutar Vue.js',
      completed: false,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const task = {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }

    const newTasks = [ ...tasks, task ];

    setTasks(newTasks);
  }

  const handleTaskDelition = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) { 
        return { ...task, completed: !task.completed }
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDelition={handleTaskDelition}
              />
            </>
          )}
        />
        <Route
          path="/:taskTitle"
          exact
          component={TaskDetails}
        />
      </div>
    </ BrowserRouter>
  );
}

export default App;