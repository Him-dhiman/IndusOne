import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from "./Components/common/heading/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Footer from './Components/common/footer/Footer';

import Prepare from './Components/Prepare/Prepare.js'
import Compete from './Components/Compete/Compete.js'
import SavedQuestions from './Components/Saved/SavedProblems.js'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Prepare />} />      
        <Route exact path="/compete" element={<Compete />} />     
        <Route exact path="/saved-questions" element={<SavedQuestions />} /> 
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
