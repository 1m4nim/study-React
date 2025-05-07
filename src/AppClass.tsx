import React from "react";
import logo from "/fungi.jpg";
import "./App.css";

class AppClass extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="log" />
          <p>
            Edit <code>src/AppClass.tsx</code>and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello, React!!!
          </a>
        </header>
      </div>
    );
  }
}

export default AppClass;
