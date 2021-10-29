import HeaderApp from '../DasboardPage/header2'
import Requests from './requests'
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
        temp:{
            overflowX:'hidden'
        }
  };
});

function RequestsPage() {
  const classes = useStyles();
  return (
    <div className={classes.temp}>
      <HeaderApp />
      <Requests />
    </div>
  );
}

export default RequestsPage;
