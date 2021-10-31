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
import axios from "axios";
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
  const [open, setOpen] = React.useState(false);
  const [requests, setRequests] = React.useState(null);
  const [currRequest, setCurrRequest] = React.useState(null);
  React.useEffect(() => {
    getRequests();
  }, []);
  const isActive = useMediaQuery("(max-width : 700px)");
  const handleClose = () => {
    setOpen(false);
    setCurrRequest(null);
  };
  const getRequests = () => {
    axios
      .get(
        "http://127.0.0.1:8000/uidai/introducer_request/" +
          sessionStorage.getItem("user") +
          "/",
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("request_sent: ", res.data);
        setRequests(res.data["request_introducer"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const declineRequest = () => {
    console.log(currRequest);
    const data = {
      introducer: sessionStorage.getItem("user"),
      client: currRequest.client_id,
      status: "declined",
    };
    axios
      .put("http://127.0.0.1:8000/uidai/sent/" + currRequest.id + "/", data, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("Request declined successfully!!", res.data);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      {requests !== null &&
        requests.map(function (request, index) {
          return (
            <Container
              className={classes.inContainer}
              sx={{ flexDirection: isActive ? "column" : "row" }}
              key={index.toString()}
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
                      fontSize: "1.2em",
                      fontWeight: "bold",
                    }}
                  >
                    {request.client_name}&nbsp;
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "1.2em",
                    }}
                  >
                    {isActive ? <br></br> : "|  "}
                    Aadhar:&nbsp;{request.client_aadhar}
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
                    mb: "1em",
                  }}
                >
                  Waiting for your response
                </Typography>
                <br />
                <br />

                <div className={classes.buttons}>
                  <Button
                    variant="outlined"
                    color="error"
                    style={{
                      maxWidth: "75%",
                      padding: "1.5% 3%",
                      color: "red",
                    }}
                    type="submit"
                    sx={{
                      borderRadius: 28,
                      alignSelf: "center",
                      justifySelf: "center",
                      textAlign: "center",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                      setCurrRequest(request);
                    }}
                  >
                    Decline request
                  </Button>
                  {isActive ? <div>&nbsp;</div> : ""}
                  <Button
                    variant="outlined"
                    style={{ maxWidth: "75%", padding: "1.5% 3%" }}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      props.history.push(`/reqs/${request.id}`);
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
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  Delete Request
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure decline the request?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    color="primary"
                  >
                    No
                  </Button>
                  <Button
                    onClick={declineRequest}
                    autoFocus
                    variant="outlined"
                    color="secondary"
                  >
                    Yes, decline request
                  </Button>
                </DialogActions>
              </Dialog>
            </Container>
          );
        })}
    </Container>
  );
}

export default Requests;
