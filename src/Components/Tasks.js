import React from "react";
import "../styles/Tasks.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tasks({ text }) {
    return (
        <div className="tasks-container">
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