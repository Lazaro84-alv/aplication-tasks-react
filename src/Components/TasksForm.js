import React from "react";

function TasksForm(props) {
    return (
        <form className="tasks-form">
            <input 
              className="tasks-input"
              type="text"
              placeholder="Write a task"
              name="text"
            />
            <button 
              className="tasks-button"
            >
              Add Tasks
            </button>
        </form>
    );
}


export default TasksForm;