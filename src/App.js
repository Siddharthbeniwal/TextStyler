import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div style={{ backgroundColor: isDarkMode ? "darkslategrey" : "lavender" }}>
      <Navbar title="My Text Styler" />
      <label className="toggle-container">
        <input
          type="checkbox"
          onChange={toggleTheme}
          className="toggle-input"
        />
        <span className="toggle-slider" />
      </label>
      {isDarkMode && (
        <p style={{ marginLeft: "20px", color: "white" }}>Dark Mode is On</p>
      )}
      {!isDarkMode && <p style={{ marginLeft: "20px" }}>Light Mode is On</p>}
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter text here:" theme={isDarkMode} />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
