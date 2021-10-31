import HeaderApp from "../DasboardPage/header2";
import VerifyRequest from "./verifyReq";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => {
  return {
    temp: {
      overflowX: "hidden",
      overflowY: "hidden",
    },
  };
});

function VerifyReq(props) {
  const classes = useStyles();
  if (props.loginStatus) {
    return (
      <div className={classes.temp}>
        <HeaderApp {...props} />
        <VerifyRequest {...props} />
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default VerifyReq;
