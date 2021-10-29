import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => {
  console.log("theme: ", theme);
  return {
    parent: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    image: {
      maxHeight: "100%",
      maxWidth: "100%",
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
      width: '50vw !important',
      minWidth : 'fit-content !important',
    }
  };
});

function Login() {
  const classes = useStyles();
  const [captcha, setCaptcha] = React.useState(null);
  const [aadharNumber, setAadharNum] = React.useState('');
  const [errorAadhar, setErrorAAdhar] = React.useState(false)
  const [captchaVal, setCaptchaVal] = React.useState('');
  const isactive = useMediaQuery("(max-width : 500px)");
  let width = "40vw";
  let halfWidth = "20vw";

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleAadharChange = (e) =>{
    setAadharNum(e.target.value)
  }

  const handleCaptchaChange = (e) =>{
    setCaptchaVal(e.target.value)
  }

  React.useEffect(() => {}, []);
  if (isactive) {
    width = "80vw";
    halfWidth = "40vw";
  }
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { m: 1, width: { width } },
          }}
        >
          <Typography component="h5" variant="h5" textAlign={"center"}>
            Login to your account
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ margin: "10px auto", textAlign: "center" }}
          >
            An OTP will be sent to your registered mobile number
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
          <TextField
            id="outlined-basic"
            label="Aadhar Number"
            variant="outlined"
            value = {aadharNumber}
            onChange = {(e)=>handleAadharChange(e)}
            error={errorAadhar}
          ></TextField>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: !isactive ? "row" : "column-reverse",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Captcha"
              variant="outlined"
              sx={{ width: { halfWidth } }}
              value = {captchaVal}
              onChange = {(e) => handleCaptchaChange(e)}
            ></TextField>
            <Box component="div" height={53} width={halfWidth}>
              <img src={captcha} alt="not loaded" className={classes.image} />
            </Box>
          </Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D32828" , maxWidth:'50%', padding:'1.5%'}}
            type="submit"
            sx={{ borderRadius: 28 }}
            onClick={handleLogin}
            halfWidth
          >
            Generate OTP
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
