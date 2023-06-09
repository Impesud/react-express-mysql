import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p>
          React 17.0.2, Express 4.17.1 and MariaDB on Docker
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://expressjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Express
        </a>
      </header>
      <footer className="App-footer">
        <p>©Impesud 2023</p>
      </footer>
    </div>
  );
}

export default App;
