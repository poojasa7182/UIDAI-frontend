import React from 'react'
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import OtpInput from 'react-otp-input';
import { makeStyles } from "@mui/styles";
import './otp.css'
const useStyles = makeStyles((theme) => ({
    parent :{
        height: "100vh",
        border: '2px solid black',
        display: "flex",
        justifyContent:'center',
        alignItems:'center'
    },
    otp:{
        width:'100%',
        // border:'2px solid black',
        justifyContent:'center',
    }
  }));

function OTP() {
    const classes = useStyles();
    const [otp, setOTP] = React.useState('');

    const handleChange=(otp)=>{
        console.log(otp)
        setOTP(otp);
    }
    
      
    return (
        <div className={classes.parent}>
        <Container> 
             <Box
            component="div"
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            }}
            >
            <Typography component="h5" variant="h5">Enter your OTP</Typography>
            <Typography component="p" variant="p" sx={{margin:"10px auto"}}>OTP has been sent on on your register aadhar mobile number</Typography>
            </Box>
            <Box
                component="form"
                autoComplete={false}
                noValidate={true}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > :not(style)": { m: 1, width: 400 },
                  }}                
            >
           <OtpInput
                value={otp}
                onChange={(e)=>handleChange(e)}
                numInputs={6}
                separator={<span> &nbsp;</span>}
                className={classes.otp}
            />
            <Button variant="contained" style={{backgroundColor: "#D32828"}} type="submit"  fullWidth>
                Login
            </Button>
            </Box>
        </Container>
        </div>
    )
}

export default OTP