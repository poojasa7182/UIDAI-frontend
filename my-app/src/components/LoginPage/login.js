import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import ReplayIcon from "@mui/icons-material/Replay";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  console.log("theme: ", theme);
  return {
    parent: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    image: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
    logo: {
      width: "25%",
      marginTop: "-90%",
      marginLeft: "37.5%",
    },
    contain: {
      background: "rgba(255,255,255,0.4)",
      backdropFilter: "saturate(180%) blur(10px)",
      // border:'10px solid black',
      borderRadius: "50px",
      paddingTop: "2.5%",
      paddingBottom: "4%",
      width: "50vw !important",
      minWidth: "fit-content !important",
    },
    hover: {
      cursor: "pointer",
      "&:hover": {
        opacity: "0.5 !important",
      },
    },
  };
});

function Login(props) {
  const classes = useStyles();
  const [aadharNumber, setAadharNum] = React.useState("");
  const [errorAadhar, setErrorAAdhar] = React.useState(false);
  const [errorCaptcha, setErrorCaptcha] = React.useState(false);
  const [error, setError] = React.useState("");
  const [captchaVal, setCaptchaVal] = React.useState("");
  const isactive = useMediaQuery("(max-width : 500px)");
  const [base64Icon, setbase64Icon] = React.useState("");
  const [captchaTrxn, setcaptchaTrxn] = React.useState(null);
  const Aadhar_Regex = new RegExp("^[1-9]{1}[0-9]{11}$");
  const history = useHistory();
  let width = "40vw";
  let halfWidth = "20vw";

  const captchaGen = "http://localhost:8000/uidai/capcha/";
  const otpGen = "http://localhost:8000/uidai/otp/";

  const captcha = () => {
    axios.get(captchaGen).then((res) => {
      setbase64Icon(`data:image/png;base64,${res.data.image}`);
      setcaptchaTrxn(res.data.trxnId);
    });
  };

  React.useEffect(() => {
    captcha();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (errorCaptcha === false && errorAadhar === false) {
      if (aadharNumber !== "" && captchaVal !== "") {
        const url =
          otpGen + captchaVal + "/" + captchaTrxn + "/" + aadharNumber;
        axios
          .get(url)
          .then((res) => {
            if (res.data.status === "Success") {
              props.setId(res.data.message);
              props.setNumber(String(aadharNumber));
              history.push("otp");
            } else if (res.data.status === "Failure") {
              setError(res.data.message);
              setCaptchaVal("");
              captcha();
              document.getElementById("invalid").style.display = "inline";
            }
          })
          .catch((e) => {
            setCaptchaVal("");
            captcha();
            document.getElementById("invalid").style.display = "inline";
          });
      } else {
        setErrorAAdhar(true);
        setErrorCaptcha(true);
      }
    }
  };

  const handleAadharChange = (e) => {
    setAadharNum(e.target.value);
    setErrorAAdhar(!Aadhar_Regex.test(e.target.value));
  };

  const handleCaptchaChange = (e) => {
    setCaptchaVal(e.target.value);
    if (e.target.value.length !== 6) {
      setErrorCaptcha(true);
    } else {
      setErrorCaptcha(false);
    }
  };

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
        {console.log(props.otp)}
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
            value={aadharNumber}
            onChange={(e) => handleAadharChange(e)}
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
              value={captchaVal}
              error={errorCaptcha}
              onChange={(e) => handleCaptchaChange(e)}
            ></TextField>
            <Box
              component="div"
              height={53}
              width={halfWidth}
              sx={{ alignItems: "center", display: "flex" }}
            >
              <img
                style={{ width: 160, height: 50 }}
                src={base64Icon}
                alt="Captcha"
              />
              <ReplayIcon
                className={classes.hover}
                onClick={captcha}
                sx={{ marginLeft: "1rem" }}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#D32828",
              maxWidth: "50%",
              padding: "1.5%",
            }}
            type="submit"
            sx={{ borderRadius: 28 }}
            onClick={handleLogin}
            halfWidth
          >
            Generate OTP
          </Button>
          <Typography
            component="p"
            id="invalid"
            variant="p"
            textAlign={"center"}
            sx={{
              color: "red",
              border: "2px solid red",
              borderRadius: 28,
              width: "fit-content !important",
              padding: "0.5rem 2rem",
              display: "none",
            }}
          >
            {error}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
