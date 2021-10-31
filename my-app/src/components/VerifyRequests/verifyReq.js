import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    containerReq:{
        padding:'2%',
        display:'flex !important',
        flexWrap:'wrap',
        flexDirection:'column',
    },
    inContainer:{
        border:'2px solid black',
        borderRadius:'20px',
        display:'flex',
    },
    box1:{
        padding:'2%',
        display:'flex !important',
        justifyContent:'space-evenly',
        textAlign:'center'
    },
    box2:{
        display:'flex',
        flexDirection:'column',
        padding:'1%',
        justifyContent:'space-evenly',
    },
    captchaContainer:{
        display:'flex !important',
        flexDirection:'column',
        padding:'1%',
        justifyContent:'space-evenly',
    },
    image:{
        alignSelf:'center'
    },
    buttons:{
        display:'flex',
        alignSelf:'center',
        justifyContent:'space-evenly',
    }
    
    
}));

function VerifyRequest(props) {
    const classes = useStyles();
    const [captchaVal, setCaptchaVal] = React.useState('');
    const isActive = useMediaQuery("(max-width : 700px)");
    const [captcha, setCaptcha] = React.useState(null);
    const [client, setClient] = React.useState('pooja')
    const [clientAadhar, setClientAadhar] = React.useState('567572542338')  
    const [introducerAdd, setIntAddress] = React.useState('')  
    
    const handleCaptchaChange = (e) =>{
        setCaptchaVal(e.target.value)
    }

    return (
        <Container className={classes.containerReq} sx={{ height: !isActive ? "90vh" : "auto" }}>
            <Typography
                variant="p"
                sx={{
                fontSize: "1.5em",
                fontWeight: "bold",
                className:classes.head,
                textAlign: isActive ? "justify !important" : "center",
                marginBottom:'2%'
                }}
            >
                Confirm your consent to share address
            </Typography>
            <Container className={classes.inContainer}>
                <Box className={classes.box1} sx={{flexDirection: isActive?'column':'row'}}>
                    <div>
                    <Typography
                        variant="p"
                        sx={{
                        fontSize: "1.3em",
                        fontWeight: "bold",
                        className:classes.head,
                        textAlign: isActive ? "justify !important" : "center",
                        marginBottom:'2%'
                        }}
                    >
                        Client Name:
                    </Typography>
                    {isActive?(<br></br>):('')}
                    <Typography
                        variant="p"
                        sx={{
                        fontSize: "1.3em",
                        className:classes.head,
                        textAlign: isActive ? "justify !important" : "center",
                        marginBottom:'2%'
                        }}
                    >
                        {client}
                    </Typography>
                    </div>
                    <div>
                    {isActive?(<br></br>):('')}
                    <Typography
                        variant="p"
                        sx={{
                        fontSize: "1.3em",
                        fontWeight: "bold",
                        className:classes.head,
                        textAlign:  "center",
                        marginBottom:'2%'
                        }}
                    >
                        Client Aadhar:
                    </Typography>
                    {isActive?(<br></br>):('')}
                    <Typography
                        variant="p"
                        sx={{
                        fontSize: "1.3em",
                        className:classes.head,
                        textAlign: isActive ? "justify !important" : "center",
                        marginBottom:'2%'
                        }}
                    >
                        {clientAadhar}
                    </Typography>
                    </div>
                </Box>
                {isActive?(<br></br>):('')}
                <Box className={classes.box2}>
                    <Typography
                        variant="p"
                        sx={{
                        fontWeight: "bold",
                        fontSize: "1.4em",
                        className:classes.head,
                        textAlign: "center",
                        marginBottom:'2%'
                        }}
                    >
                        Your Address
                    </Typography>
                    {/* <br></br> */}
                    <Typography
                        variant="p"
                        sx={{
                        fontSize: "1.2em",
                        className:classes.head,
                        textAlign: "center",
                        marginBottom:'2%'
                        }}
                    >
                        xyz house, colony
                        district
                    </Typography>
                </Box>
            </Container>
            <Container className={classes.captchaContainer}>
                <Typography
                    variant="p"
                    sx={{
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    className:classes.head,
                    textAlign:  "center",
                    marginBottom:'2%'
                    }}
                >
                    Enter Captcha
                </Typography>
                <img src={captcha} alt="not loaded" className={classes.image} />
                <br></br>
                <TextField
                    id="outlined-basic"
                    label="Captcha"
                    variant="outlined"
                    sx={{ width: isActive ? "90%" : "20%", alignSelf:'center' }}
                    value = {captchaVal}
                    onChange = {(e) => handleCaptchaChange(e)}
                ></TextField>
                <br></br>
                <Box className={classes.buttons} sx={{width:isActive?'100%':'50%'}}>
                <Button
                    variant="contained"
                    color='error'
                    style={{ maxWidth:'75%', padding:'1.5% 3%'}}
                    type="submit"
                    href='../reqs'
                    sx={{ borderRadius: 28, alignSelf:'center', justifySelf:'center', textAlign:'center' }}
                >
                Go Back
                </Button>
                <Button
                    variant="contained"
                    style={{ maxWidth:'75%', padding:'1.5% 3%'}}
                    color="success"
                    type="submit"
                    href='../req'
                    sx={{ borderRadius: 28, alignSelf:'center', justifySelf:'center', textAlign:'center' }}
                >
                 Accept request
                </Button>
                </Box>
            </Container>
           
        </Container>
        
    );
    }

export default VerifyRequest;
