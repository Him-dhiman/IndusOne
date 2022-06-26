import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import Navbar from "./front-end/common_components/Navbar/Navbar";
import Footer from "./front-end/common_components/Footer/Footer";
import LandingPage from "./front-end/before-login/pages/LandingPage";
import SignInAndSignUp from "./front-end/before-login/pages/login-register/design";
import SignupDetails from "./front-end/before-login/pages/login-register/accountBox/signupDetails"
import IMS from "./front-end/before-login/pages/IMS";
import AIConnect from "./front-end/before-login/pages/AI_Connect";
import FAQs from "./front-end/common_components/faqs/FAQs";
import Learn from "./front-end/before-login/pages/Learn";
import More from "./front-end/before-login/pages/More";
import UI from "./front-end/before-login/pages/Technologies";

import Cards from "./front-end/after-login/Components/common/certify/Cards.js";
import Header from "./front-end/after-login/Components/common/heading/Header";
import FooterX from "./front-end/after-login/Components/common/footer/Footer";

import Prepare from "./front-end/after-login/Components/Prepare/Prepare.js";
import Compete from "./front-end/after-login/Components/Compete/Compete.js";
import SavedQuestions from "./front-end/after-login/Components/Saved/SavedProblems.js";
import Ide from "./front-end/after-login/Components/common/ide/Ide.js";
import Submissions from "./front-end/after-login/Components/common/ide/Submissions";
import FAQ from "./front-end/after-login/Components/FAQ/FAQ";
import ScrollToTop from "./front-end/after-login/Utils/ScrollToTop";

function App() {
  const [question, setQuestion] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <LandingPage />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/sign-in"
            element={
              <>
                <Navbar />
                <SignInAndSignUp />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/signup_details"
            element={
              <>
                <Navbar />
                <SignupDetails />
                {/* <Footer /> */}
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/IMS"
            element={
              <>
                <Navbar />
                <IMS />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/faqs"
            element={
              <>
                <Navbar />
                <FAQs />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/AIConnect"
            element={
              <>
                <Navbar />
                <AIConnect />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/Learn"
            element={
              <>
                <Navbar />
                <Learn />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/More"
            element={
              <>
                <Navbar />
                <More />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            path="/UI"
            element={
              <>
                <Navbar />
                <UI />
                <Footer />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/home"
            element={
              <>
                <Header />
                <ScrollToTop />
                <Prepare setQuestion={setQuestion} />
                <FooterX />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/certify"
            element={
              <>
                <Header />
                <ScrollToTop />
                <Cards />
                <FooterX />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/Ide"
            element={
              <>
                <Header />
                <ScrollToTop />
                <Ide question={question} />
                <FooterX />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/compete"
            element={
              <>
                <Header />
                <ScrollToTop />
                <Compete />
                <FooterX />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/FAQ"
            element={
              <>
                <Header />
                <ScrollToTop />
                <FAQ />
                <FooterX />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/saved-questions"
            element={
              <>
                <Header />
                <ScrollToTop />
                <SavedQuestions />
                <FooterX />
              </>
            }
          />
          {/*------------------------------------------------------- */}
          <Route
            exact
            path="/submissions"
            element={
              <>
                <Header />
                <ScrollToTop />
                <Submissions />
                <FooterX />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
