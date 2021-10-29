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
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => {
          return <LoginPage {...props} />;
        }}
      />
      <Route
        exact
        path="/otp"
        render={(props) => {
          return <OTPPage {...props} />;
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
    </Router>
  );
}

export default App;
