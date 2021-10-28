import React from 'react'
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => {
    console.log("theme: ",theme);
    return {
    parent :{
        height: "100vh",
        display: "flex",
        justifyContent:'center', 
        alignItems:'center',
        background: "transparent linear-gradient(180deg, #FF9933 0%, #FFFFFF 49%, #9FCF9A 100%, #138808 100%) 0% 0% no-repeat padding-box"
    },
    image:{
        maxHeight:"100%",
        maxWidth:"100%"
    },
    boxContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > :not(style)": { m: 1, width: 400}
    }
  }});
  
function Login() {
    const classes = useStyles();
    const [captcha, setCaptcha] = React.useState(null);
    const isactive = useMediaQuery("(max-width : 500px)")
    const [responsive, setResponsive] = React.useState(400);
    let width = 400;
    const handleLogin = (e)=>{
        e.preventDefault();
    }
    
    React.useEffect(()=>{
        
    }, [])
    if(isactive){
        width = 200;
    }
    return (
        <div className={classes.parent}><Container >
        <Box
        component="div"
        className={classes.boxContainer}
        >
        <Typography component="h5" variant="h5">Login to your account</Typography>
        <Typography component="p" variant="p" sx={{margin:"10px auto"}}>An OTP will be sent to your registered mobile number</Typography>
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
        <TextField id="outlined-basic" label="Aadhar Number" variant="outlined"></TextField>
        <Box component="div" sx={{display:"flex", justifyContent:"space-between", width:"100%"}}>
        <TextField id="outlined-basic" label="Captcha" variant="outlined" sx={{width:`${width/2}`}} ></TextField>
        <Box component="div" height={53} width={width/2}  >
            <img src={captcha} alt="not loaded" className={classes.image}/>
        </Box>
        </Box>
        <Button variant="contained" style={{backgroundColor: "#D32828"}} type="submit" sx={ { borderRadius: 28 } } onClick={handleLogin} fullWidth>
            Generte OTP
        </Button>
        </Box>
    </Container></div>
    )
}

export default Login
