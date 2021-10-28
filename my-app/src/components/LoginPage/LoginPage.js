import Login from "./login.js";
import HeaderLogin from "./header";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  console.log("theme: ", theme);
  return {
    parent: {
      background:
        "transparent linear-gradient(180deg, #FF9933 0%, #FFFFFF 49%, #9FCF9A 100%, #138808 100%) 0% 0% no-repeat padding-box",
    },
  };
});

function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <HeaderLogin />
      <Login />
    </div>
  );
}

export default LoginPage;
