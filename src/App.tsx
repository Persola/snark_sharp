import { ConsolePage } from './pages/ConsolePage';
import React, { useState } from "react"; // TGB
import './App.scss';

// Define styles for the button when toggled or untoggled
const styles = {
  toggled: {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  untoggled: {
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function App() {
  // Define the state that will control the toggle state
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the state
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div data-component="App">
      {/* Button changes appearance based on the toggle state */}
      <button onClick={handleToggle} style={isToggled ? styles.toggled : styles.untoggled}>
        {isToggled ? "UPDATE UI" : "RESTORE UI"}
      </button>

      {/* Conditionally render the component based on the toggle state */}
      {isToggled && <ConsolePage />}
    </div>
  );
}

export default App;
