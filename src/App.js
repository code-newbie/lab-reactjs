import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Error from "./page/Error";
import Navigation from "./components/Navigation";
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
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/map" component={MapHome} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
