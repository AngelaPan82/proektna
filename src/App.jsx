import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './elements/Navbar'

import Home from './pages/home';
import { About } from "./pages/about";
import { Apod } from "./pages/apod";
import { Epic } from "./pages/epic";
import { NasaTwitt } from "./pages/twitter";

import './App.css'
import './DayPicker.css';
//
// glaven Modul najprvo se povikuva ovaa funkcija od Index.js
//
export default function App() {
  document.title = "Проектна";

  return (
    <Router>
      <div>
        <Navbar />

        {/* ova se site ruti (lokacii) koj se pojavuvaat brouserot */}
        <Switch>
          <Route path="/twitter/:tlName">
            <NasaTwitt />
          </Route> 
          <Route path="/twitter">
            <NasaTwitt />
          </Route> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/apod/:datePar">
            <Apod />
          </Route>
          <Route path="/apod/">
            <Apod />
          </Route>
          <Route path="/epic/:datePar/:ndx">
            <Epic />
          </Route>
          <Route path="/epic/:datePar">
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
