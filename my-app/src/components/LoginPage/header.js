import react from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => {
  console.log("theme: ", theme);
  return {
    parent: {
      height: "20vh",
      border: "2px solid black",
    },
    image: {
      height: "100%",
    },
  };
});

function HeaderLogin() {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <Box component="div" height="100%">
        <img
          className={classes.image}
          src="https://iconape.com/wp-content/png_logo_vector/aadhar-logo.png"
        ></img>
      </Box>
    </div>
  );
}

export default HeaderLogin;
