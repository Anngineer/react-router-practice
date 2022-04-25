import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hash Router Practice
                </a>
              </header>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <h1>About React Router Dom</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
