import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

export default (
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={Home} />
    </Switch>
);
