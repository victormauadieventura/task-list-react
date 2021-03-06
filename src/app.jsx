import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./app/components/header/header.component";
import Tasks from "./app/components/tasks/tasks.componet";
import AddTask from "./app/components/addTask/add-task.component";
import TaskDetails from "./app/components/taskDetails/task-details.component";

import './app.scss';

const App = () => {
  // tasks: similar to a binding variable in Angular
  const [tasks, setTasks] = useState([]);

  // Equivalent in Angular to OnChanges, inside the [] could be sent a variable to be observed
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");

      setTasks(data);
    }

    fetchTasks();
  }, []);

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