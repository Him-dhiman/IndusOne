import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Body from './components/Body.js'
import './App.css';
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Footer from './components/common/footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Body />} />          
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
