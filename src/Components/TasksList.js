import React, { useState } from "react";
import TasksForm from "./TasksForm";
import "../styles/TasksList.css";
import Tasks from "./Tasks";

function TasksList() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
      if (task.text.trim()) {
        task.text = task.text.trim();

        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
      }
    };

    const taskDelete = id => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    };

    return (
        <>
            <TasksForm onSubmit={addTask} />
            <div className="tasks-list-container">
              {
                tasks.map((task) => 
                  <Tasks 
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    taskDelete={taskDelete}
                  />
                )
              }
            </div>
        </>
    );
}

export default TasksList;