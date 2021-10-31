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
  const [user, setUser] = React.useState("Paritosh Kabra");
  const [introducer, setintroducer] = React.useState("Landlord singh");
  const reqStatus = 1;
  const aadhar_me = "123443211234";
  const aadhar_intro = "98766789876";
  const isActive = useMediaQuery("(max-width : 700px)");
  const address = [{ f: "val1" }, { f: "val2" }, { f: "val3" }, { f: "val4" }];
  const [open, setOpen] = React.useState(props.location.openSnackbar);
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
              {user}
            </Typography>
            <List dense={true}>
              {address.map((field, index) => {
                return (
                  <ListItem key={index.toString()} alignItems="flex-start">
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      f1:&nbsp;
                    </Typography>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontSize: "14px", fontWeight: "300" }}
                    >
                      {field.f}
                    </Typography>
                  </ListItem>
                );
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
            <List dense={true}>
              {address.map((field, index) => {
                return (
                  <ListItem key={index.toString()} alignItems="flex-start">
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      f1:&nbsp;
                    </Typography>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontSize: "14px", fontWeight: "300" }}
                    >
                      {field.f}
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
                {introducer != "" ? (
                  <span>
                    {introducer}
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
                {aadhar_me}
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
              <Typography sx={{ fontSize: 16, fontWeight: "500" }} gutterBottom>
                Awaiting Introducer Response
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
            <Button
              variant="outlined"
              color="error"
              // startIcon={<DeleteIcon />}
              sx={{ mt: 1, borderRadius: 2 }}
              fullWidth
            >
              cancel Request
            </Button>
          </div>
        </Container>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => {
          setOpen(false);
        }}
        message={props.location.snackMsg}
      />
      {/* Badge */}
    </Container>
  );
}

export default Application;
