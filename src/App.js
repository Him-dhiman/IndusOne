import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'
import Cards from './components/common/certify/Cards.js'

import Header from "./components/common/heading/Header"
import React, {useEffect, useState} from "react";
import Footer from './components/common/footer/Footer'
import Prepare from './components/Prepare/Prepare.js'
import Compete from './components/Compete/Compete.js'
import SavedQuestions from './components/Saved/SavedProblems.js'

import Ide from './components/common/ide/Ide';
import Submissions from './components/common/ide/Submissions/app';
import FAQ from './components/FAQ/FAQ';
import ScrollToTop from './Utils/ScrollToTop'



const App = () => {
  const [question, setQuestion] = useState(""); 

  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
        <Route exact path="/" element={<Prepare setQuestion={setQuestion}/>} /> 
        <Route exact path='/certify' element={<Cards/>} />
        <Route exact path='/Ide' element={<Ide question={question}/>}/>
        <Route exact path="/compete" element={<Compete/> } />     
        <Route exact path="/FAQ" element={<FAQ/>}/>
        <Route exact path="/saved-questions" element={<SavedQuestions/>} />
        <Route exact path="/Ide/submissions" element={<Submissions/>}/>
        
        </Routes >
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
