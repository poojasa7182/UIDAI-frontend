import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Badge } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import {
  DialogTitle,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  item: {
    minHeight: "100%",
  },
  itemSpecial: {
    "&.MuiContainer-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  },
  status: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
}));

function Application(props) {
  const classes = useStyles();
  const [user, setUser] = React.useState(null);
  const [request, setRequest] = React.useState(null);
  // const [introducer, setIntroducer] = React.useState(null);
  // const [status, setStatus] = React.useState(null);
  // const [requestId, setRequestId] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const reqStatus = 1;
  const isActive = useMediaQuery("(max-width : 700px)");
  // const [open, setOpen] = React.useState(props.location.openSnackbar);

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/uidai/users/" +
          sessionStorage.getItem("user") +
          "/",
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("address: ", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getRequest();
  }, []);
  const getRequest = () => {
    axios
      .get(
        "http://127.0.0.1:8000/uidai/user_request/" +
          sessionStorage.getItem("user") +
          "/",
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("request_sent: ", res.data["request_client"][0]);
        setRequest(res.data["request_client"][0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteRequest = () => {
    axios
      .delete("http://127.0.0.1:8000/uidai/sent/" + request.id + "/", {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("Request deleted successfully!!");
        getRequest();
        setRequest(null);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (user !== null) {
    return (
      // sx={}
      //{ height: !isActive ? "100vh" : "auto" }
      <Container sx={{ height: !isActive ? "90vh" : "auto" }}>
        <Container
          sx={{
            // height: "50%",
            // // width:"",
            padding: "4rem",
            display: "flex",
            flexDirection: !isActive ? "row" : "column",
            alignItems: "center",
            border: "2px solid black",
            borderRadius: "40px",
            marginTop: "2%",
          }}
        >
          <Container
            className={`${classes.item} ${classes.itemSpecial}`}
            style={{
              minWidth: !isActive ? "33%" : "100%",
              maxHeight: isActive ? "150px" : "100%",
              alignItems: isActive ? "flex-start" : "",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2021/09/27/14/39/paris-6661136__480.jpg"
              alt=""
              className={classes.image}
              style={{
                width: isActive ? "100%" : "75%",
                height: isActive ? "150px" : "",
                marginBottom: isActive ? "10%" : "",
              }}
            />
          </Container>
          <Container
            className={`${classes.item} ${classes.itemSpecial}`}
            style={{
              minWidth: !isActive ? "33%" : "100%",
              alignItems: isActive ? "flex-start" : "",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isActive ? "flex-start" : "center",
                justifyContent: "center",
                maxHeight: "100%",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: isActive ? "left" : "center",
                }}
              >
                {user.name}
              </Typography>
              <List dense={true} style={{ height: "200px", overflow: "auto" }}>
                {Object.keys(user).map((field, index) => {
                  return field !== "address" &&
                    field !== "name" &&
                    field !== "username" &&
                    field !== "lastModified" &&
                    field !== "id" ? (
                    <ListItem key={index.toString()} alignItems="flex-start">
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {field}:&nbsp;
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ fontSize: "14px", fontWeight: "300" }}
                      >
                        {user[`${field}`]}
                      </Typography>
                    </ListItem>
                  ) : null;
                })}
              </List>
            </div>
          </Container>
          <Container
            className={`${classes.item} ${classes.itemSpecial}`}
            style={{
              minWidth: !isActive ? "33%" : "100%",
              alignItems: isActive ? "flex-start" : "",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isActive ? "flex-start" : "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: isActive ? "left" : "center",
                }}
              >
                Current Address
              </Typography>
              <List dense={true} style={{ height: "200px", overflow: "auto" }}>
                {Object.keys(user.address).map((field, index) => {
                  return (
                    <ListItem key={index.toString()} alignItems="flex-start">
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {field}:&nbsp;
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ fontSize: "14px", fontWeight: "300" }}
                      >
                        {user.address[`${field}`]}
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Container>
        </Container>
        <br />
        {/* <Badge badgeContent={100} color="secondary"> */}
        {request != null &&
        (request.status === "empty" || request.status === "success") ? (
          <Container
            sx={{
              padding: "4rem",
              display: "flex",
              flexDirection: !isActive ? "row" : "column",
              border: "2px solid black",
              borderRadius: "40px",
            }}
          >
            <Container
              className={classes.item}
              style={{ overflow: "auto", overflowX: "hidden" }}
            >
              <Box sx={{ minWidth: 275 }}>
                <div>
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Introducer Details
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                    component="span"
                  >
                    {request !== null ? (
                      <span>
                        {request.introducer_name}
                        <span style={{ fontSize: "24px" }}>
                          <br />
                        </span>
                      </span>
                    ) : (
                      ""
                    )}

                    <span style={{ fontSize: "16px" }}>Aadhar Number:</span>
                  </Typography>
                  <Typography sx={{ ml: 0.5 }} component="span">
                    {request.introducer_aadhar}
                  </Typography>
                </div>
                <div style={{ marginTop: "10px" }}>
                  {/* <Typography
                variant="span"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                Mobile:
              </Typography>
              <Typography component="span" sx={{ ml: 0.5, fontSize: "14px" }}>
                5462325894
              </Typography> */}
                </div>
              </Box>
            </Container>
            {isActive ? (
              <React.Fragment>
                <Divider />
                <br />
              </React.Fragment>
            ) : null}
            <Container className={classes.item}>
              <Box className={classes.status}>
                <div>
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Status
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "500" }}
                    gutterBottom
                  >
                    {request.status === "success" ? (
                      <Typography
                        variant="h1"
                        style={{
                          color: "green",
                          fontSize: "16px",
                          textAlign: "start",
                        }}
                      >
                        Your request was accepted!!
                      </Typography>
                    ) : (
                      "Awaiting Introducer Response"
                    )}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "10%",
                    width: "fit-content",
                  }}
                >
                  {/* <Button
                variant="outlined"
                startIcon={<EditIcon />}
                sx={{ mt: 1, borderRadius: 28 }}
                fullWidth
              >
                Edit Request
              </Button> */}
                  {/* <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                sx={{ mt: 1, color:'error' }}
                fullWidth
              >
                Delete Request
              </Button> */}
                </div>
              </Box>
            </Container>
            <Container>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "10%",
                  width: "fit-content",
                }}
              >
                {request.status === "empty" ? (
                  <Button
                    variant="outlined"
                    color="error"
                    // startIcon={<DeleteIcon />}
                    sx={{ mt: 1, borderRadius: 2 }}
                    fullWidth
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    Cancel Request
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="success"
                    // startIcon={<DeleteIcon />}
                    sx={{ mt: 1, borderRadius: 2 }}
                    fullWidth
                    onClick={(e) => {
                      e.preventDefault();
                      props.history.push("/form");
                    }}
                  >
                    Update Address
                  </Button>
                )}
              </div>
            </Container>
          </Container>
        ) : (
          <Typography
            variant="h1"
            style={{
              color:
                request != null && request.status === "declined"
                  ? "red"
                  : "green",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            {request != null && request.status === "declined"
              ? "Your request was declined!"
              : "You have no pending request"}
            ! Create a new request for address update.
          </Typography>
        )}
        <Dialog
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
            <Button onClick={handleClose} variant="contained" color="primary">
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
        </Dialog>
        {/* Badge */}
      </Container>
    );
  } else {
    return <p>Loading data...</p>;
  }
}

export default Application;
