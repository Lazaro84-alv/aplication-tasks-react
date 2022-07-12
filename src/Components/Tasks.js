import React from "react";
import "../styles/Tasks.css";

function Tasks({ text }) {
    return (
        <div className="tasks-container">
            <div className="tasks-text">
                {text}
            </div>
            <div className="tasks-icon">
                Excluir
            </div>
        </div>
    );
}

export default Tasks;