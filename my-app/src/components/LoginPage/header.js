import react from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => {
  console.log("theme: ", theme);
  return {
    parent: {
      height: "10vh",
    },
    image: {
      height: "200%",
      maxHeight:'20vw'
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
          src="https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal_Black_Transparent.png"
        ></img>
      </Box>
    </div>
  );
}

export default HeaderLogin;
