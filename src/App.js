import React from "react";
import Games from "./Components/Games Page/Games";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FocusColor from "./Components/FocusColor/FocusColor";
import SpotUp from "./Components/Spot Up/SpotUp";

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" exact component={Games} />
        <Route path="/focuscolor" exact component={FocusColor} />
        <Route path="/spotup" exact component={SpotUp} />
        <Route path="/*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
