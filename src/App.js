import React from "react";
import Navbar from "./Components/Navbar";
import Games from "./Components/Games";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FocusColor from "./Components/FocusColor";
import SpotUp from "./Components/SpotUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/games" component={Games} />
      <Route path="/focuscolor" exact component={FocusColor} />
      <Route path="/spotup" exact component={SpotUp} />
    </Router>
  );
}

export default App;
