import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Body from './components/Body.js'
import './App.css';
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ide from './components/common/ide/Ide'
import React from "react";
import Footer from './components/common/footer/Footer';
import certify from './components/common/certify/Cards.js';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={Body} />   
        <Route exact path='/certify' component={certify} />  
        <Route exact path='/ide' component={ide}/>
        
        </Switch >
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
