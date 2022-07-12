import React from "react";
import "../styles/Tasks.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tasks({ id, text, completed, completeTask, taskDelete }) {
    return (
        <div className={completed ? "tasks-container completed" : "tasks-container"}>
            <div 
              className="tasks-text"
              onClick={() => completeTask(id)}
            >
                {text}
            </div>
            <div 
              className="tasks-icon-container"
              onClick={() => taskDelete(id)}
              >
                <AiOutlineCloseCircle className="tasks-icon" />
            </div>
        </div>
    );
}

export default Tasks;