import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    containerReq: {
        padding: "2%",
        display: "flex !important",
        flexDirection: "column",
        overflowY: "auto",
    },
    containerReq2: {
        padding: '2%',
        display: 'flex !important',
        flexDirection: 'column',
        justifyContent:'center',
        overflowY: 'auto',
    },

}));



function Requests(props) {
    const classes = useStyles();
    const [pass,setPass]= React.useState('');
    const [open, setOpen] = React.useState(false);
    const [address, setAddress] = React.useState('');
    // const address = {
    //     country: 'India',
    //     state: 'Delhi',
    //     dist: 'New Delhi',
    //     subDist: 'New Delhi',
    //     po: "New Delhi G.p",
    //     pc: "110001",
    //     vtc: "New Delhi G.P.O.",
    //     landmark: '',
    //     loc: 'Kali Bari Marg, DIZ Area',
    //     street: 'BSNL Colony',
    //     house: '34/1 Type- V Ground Floor'
    // }
    const [done, setDone] = React.useState(false)
    const [loc, setLoc] = React.useState(address.loc)
    const [street, setStreet] = React.useState(address.street)
    const [house, setHouse] = React.useState(address.house)
    const isActive = useMediaQuery("(max-width : 700px)");

    const handleClick = () => {
        setOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
      
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );
    
    function checkPass(){
        axios
            .get('http://localhost:8000/uidai/validate/password/?password='+pass,
            {
                headers: {
                  'Authorization': `Token ${sessionStorage.getItem("token")}`,
                }
              }
            )
            .then(res => {
                setAddress(res.data);
                setLoc(res.data.address.loc)
                setStreet(res.data.address.street)
                setHouse(res.data.address.house)
                setDone ( true);
            })
            .catch(e => {
                setOpen(true);
                console.log(e)
            })
    }

    return ( 
        <Container>
        {done?(<Container className = { classes.containerReq }
            sx = {
                { height: !isActive ? "90vh" : "auto" } } >
            <Typography variant = "p"
            sx = {
                {
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    className: classes.head,
                    textAlign: isActive ? "justify !important" : "center",
                }
            } >
            Address Form </Typography> <br/>
            <TextField 
            label = "House Number/Location"
            defaultValue = { address.house }
            value = { house }
            onChange = {(e) => setHouse(e.target.value) }
            /> <br/>
            <TextField 
            label = "Street"
            defaultValue = { address.street }
            value = { street }
            onChange = {
                (e) => setStreet(e.target.value) }
            /> <br/>
            <TextField 
            label = "Landmark"
            defaultValue = { address.landmark }
            value = { loc }
            onChange = {
                (e) => setLoc(e.target.value) }
            /> <br/>
            <TextField 
            label = "Location"
            defaultValue = { address.loc }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br></br>
            <TextField 
            label = "Village / Town / City"
            defaultValue = { address.vtc }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br/>
            <TextField 
            label = "Post Office"
            defaultValue = { address.po }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br></br>
            <TextField 
            label = " Sub District"
            defaultValue = { address.subdistrict }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br></br>
            <TextField 
            label = "District"
            defaultValue = { address.district }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br></br>
            <TextField 
            label = "Pin Code"
            defaultValue = { address.pc }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br></br>
            <TextField
            label = "State"
            defaultValue = { address.state }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /> <br></br>
            <TextField 
            label = "Country"
            defaultValue = { address.country }
            InputProps = {
                {
                    readOnly: true,
                }
            }
            /><br></br>
            <Button variant = "contained"
            color = "success"
            style = {
                { maxWidth: '75%', padding: '1.5% 3%' } }
            type = "submit"
            sx = {
                { borderRadius: 28, alignSelf: 'center' } } >
            Submit address details 
            </Button> </Container>):
            (<Container className = { classes.containerReq2 }
                sx = {
                    { height: !isActive ? "90vh" : "auto" } }>
                {/* <Box > */}
                <Typography variant = "p"
                sx = {
                    {
                        fontSize: "1.5em",
                        fontWeight: "bold",
                        className: classes.head,
                        textAlign:  "center",
                    }
                } >
                Please enter password </Typography>
                <br/>
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ width: isActive ? "90%" : "20%", alignSelf: "center" }}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                ></TextField>
                <br/>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={()=>setOpen(false)}
                    message="Incorrect password"
                    action={action}
                    />
                <br/>
                <Button
                    variant="contained"
                    color="error"
                    style={{ maxWidth: "75%", padding: "1% 1%" }}
                    type="submit"
                    sx={{
                    borderRadius: 28,
                    alignSelf: "center",
                    justifySelf: "center",
                    textAlign: "center",
                    }}
                    onClick={()=>checkPass()}
                >
                    View Address Details
                </Button>
                {/* </Box> */}
            </Container>
                )}</Container>
        


  );
}

export default Requests;
