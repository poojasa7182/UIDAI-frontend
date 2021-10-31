import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/material";
import axios from "axios";
import ReplayIcon from "@mui/icons-material/Replay";

const useStyles = makeStyles((theme) => ({
  containerReq: {
    padding: "2%",
    display: "flex !important",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  inContainer: {
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
  },
  box1: {
    padding: "2%",
    display: "flex !important",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    padding: "1%",
    justifyContent: "space-evenly",
  },
  captchaContainer: {
    display: "flex !important",
    flexDirection: "column",
    padding: "1%",
    justifyContent: "space-evenly",
  },
  image: {
    alignSelf: "center",
  },
  buttons: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  hover: {
    cursor: "pointer",
    "&:hover": {
      opacity: "0.5 !important",
    },
  },
}));

function VerifyRequest(props) {
  const classes = useStyles();
  const [captchaVal, setCaptchaVal] = React.useState("");
  const [base64Icon, setbase64Icon] = React.useState("");
  const [captchaTrxn, setcaptchaTrxn] = React.useState(null);
  const [aadharNumber, setAadharNumber] = React.useState(null);
  const [addressId, setAddressId] = React.useState(-1);
  const [request, setRequest] = React.useState(null);
  const isActive = useMediaQuery("(max-width : 700px)");
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
    getAadhar();
    getAddress();
  }, []);

  const getAddress = () => {
    axios
      .get(
        "http://127.0.0.1:8000/uidai/users/" + sessionStorage.getItem("user"),
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setAddressId(res.data.address.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAadhar = () => {
    axios
      .get("http://127.0.0.1:8000/uidai/sent/" + props.match.params.id, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setAadharNumber(res.data["introducer_aadhar"]);
        setRequest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCaptchaChange = (e) => {
    setCaptchaVal(e.target.value);
  };
  const handleOTP = (e) => {
    e.preventDefault();
    if (captchaVal !== "") {
      const url = otpGen + captchaVal + "/" + captchaTrxn + "/" + aadharNumber;
      axios
        .get(url)
        .then((res) => {
          console.log("F:", aadharNumber, addressId);
          const data = {
            client_pk: request.client_id,
            introducer: sessionStorage.getItem("user"),
            address_pk: addressId,
            password: (Math.random() + 1).toString(36).substring(7),
          };
          axios
            .post("http://127.0.0.1:8000/uidai/confirm/", data, {
              headers: {
                Authorization: `Token ${sessionStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              console.log(res.data, "Post request successfull");
              const data1 = {
                introducer: sessionStorage.getItem("user"),
                client: request.client_id,
                status: "success",
              };
              axios
                .put(
                  "http://127.0.0.1:8000/uidai/sent/" +
                    props.match.params.id +
                    "/",
                  data1,
                  {
                    headers: {
                      Authorization: `Token ${sessionStorage.getItem("token")}`,
                    },
                  }
                )
                .then((res) => {
                  console.log("Request successfull!!", res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
          if (res.data.status === "Success") {
            // props.history.push("/otp");
          } else if (res.data.status === "Failure") {
            captcha();
            alert(res.data.message);
          }
        })
        .catch((e) => {
          captcha();
          alert("Invalid Captcha!");
        });
    } else {
      alert("Server errored out with " + e);
    }
  };
  return (
    <Container
      className={classes.containerReq}
      sx={{ height: !isActive ? "90vh" : "auto" }}
    >
      <Typography
        variant="p"
        sx={{
          fontSize: !isActive ? "1.5em" : "1.2em",
          fontWeight: "bold",
          className: classes.head,
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        Confirm your consent to share address
      </Typography>
      {/* <Container className={classes.inContainer}>
        <Box
          className={classes.box1}
          sx={{ flexDirection: isActive ? "column" : "row" }}
        >
          <div>
            <Typography
              variant="p"
              sx={{
                fontSize: !isActive ? "1.3em" : "1.0em",
                fontWeight: "bold",
                className: classes.head,
                textAlign: isActive ? "justify !important" : "center",
                marginBottom: "2%",
              }}
            >
              Client Name:
            </Typography>
            {isActive ? <br></br> : ""}
            <Typography
              variant="p"
              sx={{
                fontSize: !isActive ? "1.3em" : "1.0em",
                className: classes.head,
                textAlign: isActive ? "justify !important" : "center",
                marginBottom: "2%",
              }}
            >
              {client}
            </Typography>
          </div>
          <div>
            {isActive ? <br></br> : ""}
            <Typography
              variant="p"
              sx={{
                fontSize: !isActive ? "1.3em" : "1.0em",
                fontWeight: "bold",
                className: classes.head,
                textAlign: "center",
                marginBottom: "2%",
              }}
            >
              Client Aadhar:
            </Typography>
            {isActive ? <br></br> : ""}
            <Typography
              variant="p"
              sx={{
                fontSize: !isActive ? "1.3em" : "1.0em",
                className: classes.head,
                textAlign: isActive ? "justify !important" : "center",
                marginBottom: "2%",
              }}
            >
              {clientAadhar}
            </Typography>
          </div>
        </Box>
        {isActive ? <br></br> : ""}
        <Box className={classes.box2}>
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              fontSize: !isActive ? "1.4em" : "1.1em",
              className: classes.head,
              textAlign: "center",
              marginBottom: "2%",
            }}
          >
            Your Address
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: !isActive ? "1.2em" : "0.9em",
              className: classes.head,
              textAlign: "center",
              marginBottom: "2%",
            }}
          >
            xyz house, colony district
          </Typography>
        </Box>
      </Container> */}

      <Container className={classes.captchaContainer}>
        <Typography
          variant="p"
          sx={{
            fontSize: "1.2em",
            fontWeight: "bold",
            className: classes.head,
            textAlign: "center",
            marginBottom: "2%",
          }}
        >
          Enter Captcha
        </Typography>
        <div style={{ display: "flex", margin: "auto" }}>
          <img
            style={{ width: 160, height: 50 }}
            src={base64Icon}
            className={classes.image}
            alt="Captcha"
          />
          <ReplayIcon
            className={classes.hover}
            onClick={captcha}
            sx={{ marginLeft: "1rem" }}
          />
        </div>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Captcha"
          variant="outlined"
          sx={{ width: isActive ? "90%" : "20%", alignSelf: "center" }}
          value={captchaVal}
          onChange={(e) => handleCaptchaChange(e)}
        ></TextField>
        <br></br>
        <Box
          className={classes.buttons}
          sx={{ width: isActive ? "100%" : "50%", mt: "1.5em" }}
        >
          <Button
            variant="contained"
            color="error"
            style={{ maxWidth: "75%", padding: "1.5% 3%" }}
            type="submit"
            sx={{
              borderRadius: 28,
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }}
            onClick={() => {
              props.history.push("/reqs");
            }}
          >
            Go Back
          </Button>
          <Button
            variant="contained"
            style={{ maxWidth: "75%", padding: "1.5% 3%" }}
            color="success"
            type="submit"
            href="../req"
            sx={{
              borderRadius: 28,
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }}
            onClick={handleOTP}
          >
            Get OTP
          </Button>
        </Box>
      </Container>
    </Container>
  );
}

export default VerifyRequest;
