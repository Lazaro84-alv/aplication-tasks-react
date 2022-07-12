import React, { useState } from "react";
import "../styles/TasksForm.css";
import { v4 as uuidv4 } from 'uuid';

function TasksForm(props) {

    const [input, setInput] = useState('');

    const manageChange = e => {
      setInput(e.target.value);
      
    };

    const manageSend = e => {
      e.preventDefault();

      const newTask = {
        id:  uuidv4(),
        text: input,
        completed: false
      }

      props.onSubmit(newTask);
    };

    return (
        <form 
          className="tasks-form"
          onSubmit={manageSend}
        >
            <input 
              className="tasks-input"
              type="text"
              placeholder="Write a task"
              name="text"
              onChange={manageChange}
            />
            <button 
              className="tasks-button"
            >
              Add Task
            </button>
        </form>
    );
}


export default TasksForm;