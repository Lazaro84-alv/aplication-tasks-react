import React from "react";
import TasksForm from "./TasksForm";

function TasksList() {
    return (
        <>
            <TasksForm />
            <div className="tasks-list-container">
                Tasks List
            </div>
        </>
    );
}

export default TasksList;