import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/index";
import Contact from "../Contact/index";
import Work from "../Work/index";

export default function Main() {
  console.log("portfolio");

  return (
    <Router>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}
