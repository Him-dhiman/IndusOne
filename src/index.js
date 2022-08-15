import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./after-login/Components/Dashboard/assets/scss/style.scss";
import Dashboard from "./after-login/Components/Dashboard/dashboard";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Loader from "./after-login/Components/Dashboard/layouts/loader/Loader";

import { reducers } from "./after-login/Components/forum/reducers";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <Dashboard />
    </HashRouter>
  </Suspense>,

  document.getElementById("root")
);

reportWebVitals(console.log);