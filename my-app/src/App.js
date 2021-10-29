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
import Application from "./components/ApplicationPage/application.js";
import React from "react";

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
          return <Application {...props} />;
        }}
      />
    </Router>
  );
}

export default App;
