import React from "react";
import Container from "../../components/Container/index";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/index";
import Contact from "../Contact/index";
import Work from "../Work/index";
import Header from "../../components/Header/index";

export default function Main() {
  console.log("portfolio");

  return (
    <div>
      <Header>
        <Container>
          <Header />
        </Container>
      </Header>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/About">
    //       <About />
    //     </Route>
    //     <Route path="/Contact">
    //       <Contact />
    //     </Route>
    //     <Route path="/Work">
    //       <Work />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
