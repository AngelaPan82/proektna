import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './elements/Navbar'

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Apod } from "./pages/apod";
import { Epic } from "./pages/epic";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/apod/:year/:month/:day">
            <Apod />
          </Route>
          <Route path="/apod/">
            <Apod />
          </Route>
          <Route path="/epic/:year/:month/:day/:ndx">
            <Epic />
          </Route>
          <Route path="/epic/:year/:month/:day">
            <Epic />
          </Route>
          <Route path="/epic">
            <Epic />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
