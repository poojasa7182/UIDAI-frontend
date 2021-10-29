import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    containerReq:{
        padding:'5%',
        display:'flex !important',
        flexWrap:'wrap',
        flexDirection:'column',
    },
    head:{
        alignSelf:'center',
        justifySelf:'center',
        textAlign:'center'
    },
    innerContainer:{
        padding:'2%',
        height:'50%',
        display:'flex !important',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignContent:'center'
    },
    box1:{
        padding:'2%',
        width:'50%', 
        height:'100%',
        alignContent:'space-evenly', 
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',

    },
    box2:{
        padding:'1%',
        height:'100%',
        margin :'2%',
        backgroundColor:'#D3D3D3',
        borderRadius:'20px',
        textIndent:'10px !important'
    }
}));

function Requests(props) {
  const classes = useStyles();
  
  const isActive = useMediaQuery("(max-width : 700px)");

  return (
    <Container className={classes.containerReq} sx={{ height: !isActive ? "90vh" : "auto" }}>
        <br></br>
        <Typography
            variant="p"
            sx={{
            fontSize: "1.5em",
            fontWeight: "bold",
            className:classes.head,
            textAlign: isActive ? "justify !important" : "center",
            }}
        >
           Confirm your consent to share address
        </Typography>
        <br></br>
        
    </Container>
    
  );
}

export default Requests;
