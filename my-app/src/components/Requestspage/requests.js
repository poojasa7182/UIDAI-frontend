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
        border:'1px solid black',
        display:'flex !important',
        marginBottom:'3%',
        justifyContent:'space-evenly',
        borderRadius:'20px'
    },
    box1:{
        padding:'1%',
        display:'flex',
        flexDirection:'column'
    },
    box2:{
        padding:'1%',
        display:'flex',
        flexDirection:'column'
    }
    
}));

function Requests(props) {
    const classes = useStyles();

    const clients = [
        {
            name:'Pooja Allampallewar',
            aadharNo:'567572542338',
            dist:'dfd',
            house:'dd',
            loc:'wewe',
            pc:'fesfe',
            po:'dfsd',
            state:'ddsds',
            street:'dsd',
            subDist:'sas',
            vtc:'dcsdwsd',
        },
        {
            name:'dfede',
            aadharNo:'dsds',
            dist:'dfd',
            house:'dd',
            loc:'wewe',
            pc:'fesfe',
            po:'dfsd',
            state:'ddsds',
            street:'dsd',
            subDist:'sas',
            vtc:'dcsdwsd',
        },
      ]
    const isActive = useMediaQuery("(max-width : 700px)");
        
    return (
        <Container className={classes.containerReq} sx={{ height: !isActive ? "90vh" : "auto" }}>
            <Typography
                variant="p"
                sx={{
                fontSize: "1.5em",
                fontWeight: "bold",
                className:classes.head,
                textAlign: isActive ? "justify !important" : "center",
                }}
            >
            Pending requests
            </Typography>
            <br></br>
            {
                clients.map(function(client){
                    return(
                        <Container className={classes.inContainer} sx={{flexDirection:isActive?'column':'row'}}>
                            <Box className={classes.box1} sx={{width:isActive?'100%':'50%'}}>
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.5em",
                                    fontWeight: "bold",
                                    marginBottom:'2%'
                                    }}
                                >
                                Client Details
                                </Typography>
                                <div>
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.4em",
                                    fontWeight: "bold",
                                    }}
                                >
                               {client.name} 
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.2em",
                                    }}
                                >
                                {isActive?(<br></br>):('|  ')}
                                Aadhar:{client.aadharNo}
                                </Typography>
                                </div>
                                {isActive?(''):(<br></br>)}
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.2em",
                                    fontWeight:'500'
                                    }}
                                >
                                Original Address
                                </Typography>
                                <br></br>
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.2em",
                                    }}
                                >
                                {client.dist},
                                {client.house},
                                {client.loc},
                                {client.pc},
                                {client.po},
                                <br></br>
                                {client.state},
                                {client.street},
                                {client.subDist},
                                {client.vtc}
                                </Typography>
                               
                            </Box>
                            {isActive?(<Divider></Divider>):(<Divider orientation="vertical" flexItem />)}
                            
                            <Box className={classes.box2} sx={{width:isActive?'100%':'50%'}}>
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.5em",
                                    fontWeight: "bold",
                                    }}
                                >
                                Status
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                    fontSize: "1.2em",
                                    }}
                                >
                                    Waiting for your response
                                </Typography>
                                <br></br>
                                <Button
                                    variant="outlined"
                                    style={{ maxWidth:'75%', padding:'1.5% 3%'}}
                                    type="submit"
                                    sx={{ borderRadius: 28, alignSelf:'center', justifySelf:'center' }}
                                >
                                Respond to request
                                </Button>
                            </Box>
                            {isActive?(<br></br>):('')}
                        </Container>
                    )
                })
            }
           
        </Container>
        
    );
    }

export default Requests;
