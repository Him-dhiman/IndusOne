/* eslint-disable no-unused-vars */
import React, { useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useRoutes } from "react-router-dom";

import "./App.css";
import Navbar from "./common_components/Navbar/Navbar";
import Footer from "./common_components/Footer/Footer";
import LandingPage from "./before-login/pages/LandingPage";
import SignInAndSignUp from "./before-login/pages/login-register/design";
import SignupDetails from "./before-login/pages/login-register/accountBox/signupDetails";
import IMS from "./before-login/pages/IMS";
import AIConnect from "./before-login/pages/AI_Connect";
import FAQs from "./common_components/faqs/FAQs";
import Learn from "./before-login/pages/Learn";
import More from "./before-login/pages/More";
import UI from "./before-login/pages/Technologies";

import Cards from "./after-login/Components/common/certify/Cards.js";
import Header from "./after-login/Components/common/heading/Header";
import FooterX from "./after-login/Components/common/footer/Footer";

import Prepare from "./after-login/Components/Prepare/Prepare.js";
import Compete from "./after-login/Components/Compete/Compete.js";
import SavedQuestions from "./after-login/Components/Saved/SavedProblems.js";
import Ide from "./after-login/Components/common/ide/Ide.js";
import Submissions from "./after-login/Components/common/ide/Submissions/Submissions";
import FAQ from "./after-login/Components/FAQ/FAQ";
import ScrollToTop from "./after-login/Utils/ScrollToTop";
import Dashboard from "./after-login/Components/Dashboard/dashboard";

import Forum from "./after-login/Components/forum/components/Home/Home";

// import Starter from "./after-login/Components/Dashboard/views/Starter";
// import About from "./after-login/Components/Dashboard/views/About";
// import Alert from "./after-login/Components/Dashboard/views/ui/Alerts";
// import Badges from "./after-login/Components/Dashboard/views/ui/Badges";
// import Buttons from "./after-login/Components/Dashboard/views/ui/Buttons";
// import Cardss from "./after-login/Components/Dashboard/views/ui/Cards";
// import Forms from "./after-login/Components/Dashboard/views/ui/Forms";
// import Grid from "./after-login/Components/Dashboard/views/ui/Grid";
// import Tables from "./after-login/Components/Dashboard/views/ui/Tables";



const App = () => {

  const FullLayout = lazy(() => import("./after-login/Components/Dashboard/layouts/FullLayout.js"));
  const Starter = lazy(() => import("./after-login/Components/Dashboard/views/Starter.js"));
  const About = lazy(() => import("./after-login/Components/Dashboard/views/About.js"));
  const Alerts = lazy(() => import("./after-login/Components/Dashboard/views/ui/Alerts"));
  const Badges = lazy(() => import("./after-login/Components/Dashboard/views/ui/Badges"));
  const Buttons = lazy(() => import("./after-login/Components/Dashboard/views/ui/Buttons"));
  const Cardss = lazy(() => import("./after-login/Components/Dashboard/views/ui/Cards"));
  const Grid = lazy(() => import("./after-login/Components/Dashboard/views/ui/Grid"));
  const Tables = lazy(() => import("./after-login/Components/Dashboard/views/ui/Tables"));
  const Forms = lazy(() => import("./after-login/Components/Dashboard/views/ui/Forms"));
  const Breadcrumbs = lazy(() => import("./after-login/Components/Dashboard/views/ui/Breadcrumbs"));
  
  const [question, setQuestion] = useState("");
  //  const routing = useRoutes(ThemeRoutes);

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
            path= "/dashboard"
            element= {<FullLayout />}
            // children= {[
            //   { path: "/", element: <Navigate to="/starter" /> },
            //   { path: "starter", exact: true, element: <Starter /> },
            //   { path: "about", exact: true, element: <About /> },
            //   { path: "alerts", exact: true, element: <Alerts /> },
            //   { path: "badges", exact: true, element: <Badges /> },
            //   { path: "buttons", exact: true, element: <Buttons /> },
            //   { path: "cards", exact: true, element: <Cards /> },
            //   { path: "grid", exact: true, element: <Grid /> },
            //   { path: "table", exact: true, element: <Tables /> },
            //   { path: "forms", exact: true, element: <Forms /> },
            //   { path: "breadcrumbs", exact: true, element: <Breadcrumbs /> },  
            // ]}
          />
          {/*------------------------------------------------------- */}
    
          {/*------------------------------------------------------- */}
          <Route
            path="/FAQ"
            element={
              <>
                <Navbar />
                <FAQ />
                <Footer />
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
            path="/FAQ"
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
            path="/forum"
            element={
              <>
                {/* <Navbar /> */}
                <Forum />
                <Footer />
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


