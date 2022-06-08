import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Body from './Components/Body.js'
import './App.css';
import Header from "./Components/common/heading/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Footer from './Components/common/footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Body />} />          
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
