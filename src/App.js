import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'font-awesome/css/font-awesome.min.css';

import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
