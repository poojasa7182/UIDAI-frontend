import HeaderApp from '../DasboardPage/header2'
import Application from '../ApplicationPage/application'
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
        temp:{
            overflowX:'hidden'
        }
  };
});

function ApplicationPage() {
  const classes = useStyles();
  return (
    <div className={classes.temp}>
      <HeaderApp />
      <Application />
    </div>
  );
}

export default ApplicationPage;
