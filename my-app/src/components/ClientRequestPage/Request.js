import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  containerReq: {
    padding: "5%",
    display: "flex !important",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  head: {
    alignSelf: "center",
    justifySelf: "center",
    textAlign: "center",
  },
  innerContainer: {
    padding: "2%",
    height: "50%",
    display: "flex !important",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  box1: {
    padding: "2%",
    width: "50%",
    height: "100%",
    alignContent: "space-evenly",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  box2: {
    padding: "1%",
    height: "100%",
    margin: "2%",
    backgroundColor: "#D3D3D3",
    borderRadius: "20px",
    textIndent: "10px !important",
  },
}));

function Request(props) {
  const classes = useStyles();

  const isActive = useMediaQuery("(max-width : 700px)");

  return (
    <Container
      className={classes.containerReq}
      sx={{ height: !isActive ? "90vh" : "auto" }}
    >
      <br />
      <Typography
        variant="p"
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          className: classes.head,
          textAlign: isActive ? "justify !important" : "center",
        }}
      >
        Update address in aadhar with the help of introducer
      </Typography>
      <br />
      {!isActive ? <br /> : ""}
      <Container
        className={classes.innerContainer}
        sx={{ flexDirection: isActive ? "column-reverse" : "" }}
      >
        <Box className={classes.box1} sx={{ width: isActive ? "100%" : "50%" }}>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.2em",
              fontWeight: "bold",
              className: classes.head,
              textAlign: "left",
            }}
          >
            Introducer's Aadhar Number:
          </Typography>

          <TextField
            label="Aadhar Number"
            variant="outlined"
            value=""
            // onChange = {}
          ></TextField>
          {isActive ? <br /> : ""}
          <Button
            variant="contained"
            style={{
              backgroundColor: "#D32828",
              maxWidth: "75%",
              padding: "1.5% 3%",
            }}
            type="submit"
            sx={{ borderRadius: 28, alignSelf: "center" }}
            // onClick={handleLogin}
          >
            Request address details
          </Button>
        </Box>
        <Box
          className={classes.box2}
          sx={{
            width: isActive ? "100%" : "50%",
            padding: isActive ? "2%" : "1%",
          }}
        >
          <br />
          <Typography
            variant="p"
            sx={{
              fontSize: "1.5em",
              fontWeight: "bold",
              textAlign: "center",
              textIndent: "10px !important",
            }}
          >
            Who is an introducer?
          </Typography>
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Box>
      </Container>
    </Container>
  );
}

export default Request;
