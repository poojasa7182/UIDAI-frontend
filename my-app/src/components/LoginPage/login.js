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
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // background:
      //   "transparent linear-gradient(180deg, #FF9933 0%, #FFFFFF 49%, #9FCF9A 100%, #138808 100%) 0% 0% no-repeat padding-box",
    },
    image: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
  };
});

function Login() {
  const classes = useStyles();
  const [captcha, setCaptcha] = React.useState(null);
  const isactive = useMediaQuery("(max-width : 500px)");
  let width = "40vw";
  let halfWidth = "20vw";
  const handleLogin = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {}, []);
  if (isactive) {
    width = "80vw";
    halfWidth = "40vw";
  }
  return (
    <div className={classes.parent}>
      <Container>
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
            ></TextField>
            <Box component="div" height={53} width={halfWidth}>
              <img src={captcha} alt="not loaded" className={classes.image} />
            </Box>
          </Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D32828" }}
            type="submit"
            sx={{ borderRadius: 28 }}
            onClick={handleLogin}
            fullWidth
          >
            Generte OTP
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
