import HeaderApp from '../DasboardPage/header2'
import VerifyRequest from './verifyReq'
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
        temp:{
            overflowX:'hidden',
            overflowY:'hidden'
        }
  };
});

function VerifyReq() {
  const classes = useStyles();
  return (
    <div className={classes.temp}>
      <HeaderApp />
      <VerifyRequest />
    </div>
  );
}

export default VerifyReq;
