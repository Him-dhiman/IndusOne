import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./front-end/common_components/Navbar";
import Footer from "./front-end/common_components/Footer";
import LandingPage from "./front-end/before-login/pages/LandingPage";
import SignInAndSignUp from "./front-end/before-login/pages/login-register/design";
import IMS from "./front-end/before-login/pages/IMS";
import AIConnect from "./front-end/before-login/pages/AI_Connect";
import FAQs from "./front-end/before-login/pages/faqs/FAQs";
import Learn from "./front-end/before-login/pages/Learn";
import More from "./front-end/before-login/pages/More";
import UI from "./front-end/before-login/pages/Technologies";

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
            path="/faqs"
            element={
              <>
                <FAQs />
              </>
            }
          />

          {/*------------------------------------------------------- */}
          <Route
            path="/AIConnect"
            element={
              <>
                <AIConnect />
              </>
            }
          />

          {/*------------------------------------------------------- */}
          <Route
            path="/Learn"
            element={
              <>
                <Learn />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/More"
            element={
              <>
                <More />
              </>
            }
          />

          {/*------------------------------------------------------- */}
          <Route
            path="/UI"
            element={
              <>
                <UI />
              </>
            }
          />

          {/*------------------------------------------------------- */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
