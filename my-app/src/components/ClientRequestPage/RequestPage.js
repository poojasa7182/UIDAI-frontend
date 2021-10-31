import HeaderApp from "../DasboardPage/header2";
import Request from "./Request";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    temp: {
      overflowX: "hidden",
      overflowY: "hidden",
    },
  };
});

function RequestPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.temp}>
      <HeaderApp {...props} />
      <Request {...props} />
    </div>
  );
}

export default RequestPage;
