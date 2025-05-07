import logo from "/fungi.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="log" />
        <p>
          Edit <code>src/App.tsx</code>and save to reload.
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

export default App;
