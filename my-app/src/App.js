import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage.js";
import OTPPage from "./components/OTPPage/OTPPage";
import ApplicationPage from "./components/ApplicationPage/ApplicationPage";
import RequestPage from "./components/ClientRequestPage/RequestPage"
import React from "react";
import RequestsPage from './components/Requestspage/RequestsPage'
function App() {

  const logInSave = sessionStorage.getItem("login")

  const [loggedIn, setLoggedIn] = React.useState(logInSave === "true" ? true : false);
  const [otpTrxn, setotpTrxn] = React.useState(null)
  const [num, setnum] = React.useState(null)

  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => {
          return <LoginPage {...props} setId={setotpTrxn} setNumber={setnum} />;
        }}
      />
      {console.log(num)}
      <Route
        exact
        path="/otp"
        render={(props) => {
          return <OTPPage {...props} id={otpTrxn} number={num} />;
        }}
      />
      <Route
        exact
        path="/app"
        render={(props) => {
          return <ApplicationPage {...props} />;
        }}
      />
      <Route
        exact
        path="/req"
        render={(props) => {
          return <RequestPage {...props} />;
        }}
      />
      <Route
        exact
        path="/reqs"
        render={(props) => {
          return <RequestsPage {...props} />;
        }}
      />
      <Redirect to={loggedIn ? "/app" : "/"} />
    </Router>
  );
}

export default App;
