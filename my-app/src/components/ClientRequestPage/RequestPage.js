import HeaderApp from '../DasboardPage/header2'
import Request from './Request'
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

function RequestPage() {
  const classes = useStyles();
  return (
    <div className={classes.temp}>
      <HeaderApp />
      <Request />
    </div>
  );
}

export default RequestPage;
