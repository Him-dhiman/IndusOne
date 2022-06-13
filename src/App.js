import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import SignInAndSignUp from "./pages/login-register/design";
import IMS from "./pages/IMS";
import AI_Connect from "./pages/AI_Connect";
import Learn from "./pages/Learn";
import More from "./pages/More";
import Technologies from "./pages/Technologies";
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
          // -------------------------------------------------------
          <Route
            path="/sign-in"
            element={
              <>
              <SignInAndSignUp />
              </>
            }
          />
          // ---------------------------------------------------
          <Route
            path="/IMS"
            element={
              <>
              <IMS />
              </>
            }
          />

        // ------------------------------------------------------------
        <Route
          path="/AI_Connect"
          element={
            <>
            <AI_Connect/>
            </>
          }
        />

        // --------------------------------------------------------------
        <Route
          path="/Learn"
          element={
            <>
            <Learn />
            </>
          }
        />
  ]
        // ----------------------------------------------------------
        <Route
          path="/More"
          element={
            <>
            <More />
            </>
          }
        />

        // -------------------------------------------------------
        <Route
          path="/Technologies"
          element={
            <>
            <Technologies />
            </>
          }
        />

// --------------------------------------------------------------
  </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
