import HeaderApp from "../DasboardPage/header2";
import Requests from "./requests";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => {
  return {
    temp: {
      overflowX: "hidden",
    },
  };
});

function RequestsPage(props) {
  const classes = useStyles();
  if (props.loginStatus) {
    return (
      <div className={classes.temp}>
        <HeaderApp {...props} />
        <Requests {...props} />
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default RequestsPage;
