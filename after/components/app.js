import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'font-awesome/css/font-awesome.min.css';

import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          
        </Switch>
      </Router>
    </>
  )
}

export default App
