import './App.css';
import kemetecLogo from "./images/kemetec-logo.png";

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
      
    </div>
  );
}

export default App;
