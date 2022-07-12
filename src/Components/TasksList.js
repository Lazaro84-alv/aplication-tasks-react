import React, { useState } from "react";
import TasksForm from "./TasksForm";
import "../styles/TasksList.css";
import Tasks from "./Tasks";

function TasksList() {

    const [tasks, setTasks] = useState([]);

    return (
        <>
            <TasksForm />
            <div className="tasks-list-container">
              {
                tasks.map((tasks) => 
                  <Tasks 
                    text={tasks.text}
                    completed={tasks.completed}
                  />
                )
              }
            </div>
        </>
    );
}

export default TasksList;