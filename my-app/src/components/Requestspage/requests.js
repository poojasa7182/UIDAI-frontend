import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/material";
import {
  DialogTitle,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
const useStyles = makeStyles((theme) => ({
  containerReq: {
    padding: "2%",
    display: "flex !important",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  inContainer: {
    border: "1px solid black",
    display: "flex !important",
    marginBottom: "3%",
    justifyContent: "space-evenly",
    borderRadius: "20px",
  },
  box1: {
    padding: "1%",
    display: "flex",
    flexDirection: "column",
  },
  box2: {
    padding: "1%",
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function Requests(props) {
  const classes = useStyles();

  const clients = [
    {
      name: "Pooja Allampallewar",
      aadharNo: "567572542338",
    },
    {
      name: "dfede",
      aadharNo: "dsds",
    },
  ];
  const isActive = useMediaQuery("(max-width : 700px)");

  return (
    <Container
      className={classes.containerReq}
      sx={{ height: !isActive ? "90vh" : "auto" }}
    >
      <Typography
        variant="p"
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          className: classes.head,
          textAlign: isActive ? "justify !important" : "center",
        }}
      >
        Pending requests
      </Typography>
      <br></br>
      {clients.map(function (client) {
        return (
          <Container
            className={classes.inContainer}
            sx={{ flexDirection: isActive ? "column" : "row" }}
          >
            <Box
              className={classes.box1}
              sx={{ width: isActive ? "100%" : "50%" }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  marginBottom: "2%",
                }}
              >
                Client Details
              </Typography>
              <div>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1.4em",
                    fontWeight: "bold",
                  }}
                >
                  {client.name}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1.2em",
                  }}
                >
                  {isActive ? <br></br> : "|  "}
                  Aadhar:{client.aadharNo}
                </Typography>
              </div>
              {isActive ? "" : <br></br>}
            </Box>
            {isActive ? (
              <Divider></Divider>
            ) : (
              <Divider orientation="vertical" flexItem />
            )}

            <Box
              className={classes.box2}
              sx={{ width: isActive ? "100%" : "50%" }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  marginBottom: "2%",
                }}
              >
                Status
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.2em",
                }}
              >
                Waiting for your response
              </Typography>
              <br></br>
              <br></br>
              <div className={classes.buttons}>
                <Button
                  variant="outlined"
                  color="error"
                  style={{ maxWidth: "75%", padding: "1.5% 3%", color: "red" }}
                  type="submit"
                  sx={{
                    borderRadius: 28,
                    alignSelf: "center",
                    justifySelf: "center",
                    textAlign: "center",
                  }}
                  onClick={() => {}}
                >
                  Cancel request
                </Button>
                {isActive ? <div>&nbsp;</div> : ""}
                <Button
                  variant="outlined"
                  style={{ maxWidth: "75%", padding: "1.5% 3%" }}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/req");
                  }}
                  sx={{
                    borderRadius: 28,
                    alignSelf: "center",
                    justifySelf: "center",
                    textAlign: "center",
                  }}
                >
                  Respond to request
                </Button>
              </div>
            </Box>
            {isActive ? <br></br> : ""}
            {/* <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Delete Request</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure cancel the request?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  No
                </Button>
                <Button
                  onClick={deleteRequest}
                  autoFocus
                  variant="contained"
                  color="secondary"
                >
                  Yes, delete request
                </Button>
              </DialogActions>
            </Dialog> */}
          </Container>
        );
      })}
    </Container>
  );
}

export default Requests;
