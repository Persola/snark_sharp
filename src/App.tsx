import { ConsolePage } from './pages/ConsolePage';
import { useState } from "react";
import './App.scss';

const styles = {
  toggled: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    border: "none",
  },
  untoggled: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    border: "none",
  },
};

function App() {
  const [displayConsole, setDisplayConsole] = useState(false);

  const toggleConsole = () => {
    setDisplayConsole(!displayConsole);
  };

  return (
    <div>
      <button onClick={toggleConsole} style={displayConsole ? styles.toggled : styles.untoggled}>
        {displayConsole ? "UPDATE UI" : "RESTORE UI"}
      </button>

      {displayConsole && <ConsolePage />}
    </div>
  );
}

export default App;
