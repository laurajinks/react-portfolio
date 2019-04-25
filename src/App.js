import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>{routes}</Switch>
            </div>
        </Router>
    );
}

export default App;
