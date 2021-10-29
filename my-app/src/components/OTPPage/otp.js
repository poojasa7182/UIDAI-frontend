import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import OtpInput from "react-otp-input";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./otp.css";
const useStyles = makeStyles((theme) => ({
  parent: {
    height: "90vh",
    // border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
    },
  otp: {
    width: "100%",
    // border:'2px solid black',
    justifyContent: "center",
  },
  logo: {
    width:'25%',
    marginTop:'-90%',
    marginLeft:'37.5%'
  },
  contain:{
    background: 'rgba(255,255,255,0.4)',
    backdropFilter: 'saturate(180%) blur(10px)',
    // border:'10px solid black',
    borderRadius:'50px',
    paddingTop: '2.5%',
    paddingBottom: '4%',
    width: '40vw !important',
    minWidth : 'fit-content !important'
  }
}));

function OTP() {
  const classes = useStyles();
  const [otp, setOTP] = React.useState("");
  const isactive = useMediaQuery("(max-width : 500px)");
  let width = "400px";
  if (isactive) {
    width = "200px";
  }
  const handleChange = (otp) => {
    console.log(otp);
    setOTP(otp);
  };

  return (
    <div className={classes.parent}>
      <Container className={classes.contain}>
      <img
          className={classes.logo}
          src="https://iconape.com/wp-content/png_logo_vector/aadhar-logo.png"
        ></img>
        <br></br>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "& > :not(style)": { m: 1, width: { width } },
          }}
        >
          <Typography component="h5" variant="h5" textAlign="center">
            Enter your OTP
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ margin: "10px auto" }}
            textAlign="center"
          >
            OTP has been sent on on your registered aadhar mobile number
          </Typography>
        </Box>
        <br></br>
        <Box
          component="form"
          autoComplete={false}
          noValidate={true}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { m: 1, width: { width } },
          }}
        >
          <OtpInput
            value={otp}
            onChange={(e) => handleChange(e)}
            numInputs={6}
            separator={<span> &nbsp; </span>}
            className={classes.otp}
          />
          <br></br>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D32828", width:'50%'}}
            type="submit"
            sx={{ borderRadius: 28 }}
            onClick={(e) => {
              e.preventDefault();
            }}
            fullWidth
          >
            Login
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default OTP;
