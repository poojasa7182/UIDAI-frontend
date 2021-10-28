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
    height: "100vh",
    // border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "transparent linear-gradient(180deg, #FF9933 0%, #FFFFFF 49%, #9FCF9A 100%, #138808 100%) 0% 0% no-repeat padding-box",
  },
  otp: {
    width: "100%",
    // border:'2px solid black',
    justifyContent: "center",
  },
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
      <Container>
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
          <Button
            variant="contained"
            style={{ backgroundColor: "#D32828" }}
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
