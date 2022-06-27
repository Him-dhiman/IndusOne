import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from './components/common/certify/Cards.js'

import Header from "./components/common/heading/Header"
import React, {useState} from "react";
import Footer from './components/common/footer/Footer'

import Prepare from './components/Prepare/Prepare.js'
import Compete from './components/Compete/Compete.js'
import SavedQuestions from './components/Saved/SavedProblems.js'
import Ide from './components/common/ide/Ide.js';
import Submissions from './components/common/ide/Submissions';
import FAQ from './components/FAQ/FAQ';
import ScrollToTop from './Utils/ScrollToTop'


const App = () => {
  const [question, setQuestion] = useState("");
  const [submission, setSubmission] = useState(``);
  console.log(submission)
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
        <Route exact path="/" element={<Prepare setQuestion={setQuestion}/>} /> 
        <Route exact path='/certify' element={<Cards/>} />  
        <Route exact path='/Ide' element={<Ide setSubmission={setSubmission} question={question}/>}/>
        <Route exact path="/compete" element={<Compete/> } />     
        <Route exact path="/FAQ" element={<FAQ/>}/>
        <Route exact path="/saved-questions" element={<SavedQuestions/>} />
        <Route exact path="/submissions" element={<Submissions submission={submission} />} />
        </Routes >
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
