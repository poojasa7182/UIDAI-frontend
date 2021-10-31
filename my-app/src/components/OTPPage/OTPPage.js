import React from "react";
import OTP from './otp';
import HeaderLogin from '../LoginPage/header'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    console.log("theme: ", theme);
    return {
      parent: {
        background:
          "transparent linear-gradient(180deg, #ffbf80 0%, #FFFFFF 49%, #9FCF9A 100%, #138808 100%) 0% 0% no-repeat padding-box",
      },
    };
  });
  
  function OTPPage() {
    const classes = useStyles();
    return (
      <div className={classes.parent}>
        <HeaderLogin />
        <OTP />
      </div>
    );
  }
  
  export default OTPPage;
  
