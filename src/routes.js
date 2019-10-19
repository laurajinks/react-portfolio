import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/skills" component={Skills} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
  </Switch>
)
