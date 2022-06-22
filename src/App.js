import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./front-end/components/Navbar";
import Footer from "./front-end/components/Footer";
import LandingPage from "./front-end/before-login/pages/LandingPage";
import SignInAndSignUp from "./front-end/before-login/pages/login-register/design";
import IMS from "./front-end/before-login/pages/IMS";
import AIConnect from "./front-end/before-login/pages/AI_Connect";
import Learn from "./front-end/before-login/pages/Learn";
import More from "./front-end/before-login/pages/More";
import Technologies from "./front-end/before-login/pages/Technologies";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/sign-in"
            element={
              <>
                <SignInAndSignUp />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/IMS"
            element={
              <>
                <IMS />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/AI_Connect"
            element={
              <>
                <AIConnect />
              </>
            }
          />
          { /*------------------------------------------------------- */} 
          <Route
            path="/Learn"
            element={
              <>
                <Learn />
              </>
            }
          />
          { /*------------------------------------------------------- */} 
          <Route
            path="/More"
            element={
              <>
                <More />
              </>
            }
          />
          { /*------------------------------------------------------- */} 
          <Route
            path="/Technologies"
            element={
              <>
                <Technologies />
              </>
            }
          />
          { /*------------------------------------------------------- */} 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
