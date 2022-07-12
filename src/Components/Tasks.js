import React from "react";
import "../styles/Tasks.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tasks({ text, completed }) {
    return (
        <div className={completed ? "tasks-container completed" : "tasks-container"}>
            <div className="tasks-text">
                {text}
            </div>
            <div className="tasks-icon-container">
                <AiOutlineCloseCircle className="tasks-icon" />
            </div>
        </div>
    );
}

export default Tasks;