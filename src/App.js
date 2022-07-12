import './App.css';
import kemetecLogo from "./images/kemetec-logo.png";
import Tasks from "../src/components/Tasks";

function App() {
  return (
    <div className="application-tasks">
      <div className="kemetec-logo-container">
        <img 
          src={kemetecLogo} 
          className="kemetec-logo"
          alt="Logo da Kemetec" 
        />
      </div>
      <div className="main-task-list">
        <h1>My Tasks</h1>
        <Tasks />
      </div>
    </div>
  );
}

export default App;
