import React from "react";
import Navbar from './Components/Navbar';
import Games from './Components/Games';
import About from './Components/About';
import Home from './Components/Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import FocusColor from "./Components/FocusColor";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route
          path="/about"
          component={About}
          loc="https://www.divitagrawal.co/"
        />
        <Route path="/games" component={Games} />
        <Route path="/focuscolor" exact component={FocusColor} />
      </div>
    </Router>
  );
}


export default App;
