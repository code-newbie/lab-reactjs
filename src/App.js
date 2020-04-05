import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MapHome from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
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
              href="#" >
            Open Google Map Page
          </a>
          <Link to="/about">Open Google Map Page</Link>
          <Route exact path="/" component={MapHome} />
        </Router>
      </header>
    </div>
  );
}

export default App;
