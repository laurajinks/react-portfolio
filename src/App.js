import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>{routes}</Switch>
      </div>
    </Router>
  )
}

export default App
