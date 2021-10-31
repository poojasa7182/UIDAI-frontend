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
    containerReq: {
        padding: '2%',
        display: 'flex !important',
        flexDirection: 'column',
        overflowY: 'auto',
    },

}));

function Requests(props) {
    const classes = useStyles();
    // const [address, setAddress] = React.useState('');
    // @house": "34/1 Type- V Ground Floor", 
    //  "@pc": "110001", 
    const address = {
        country: 'India',
        state: 'Delhi',
        dist: 'New Delhi',
        subDist: 'New Delhi',
        po: "New Delhi G.p",
        pc: "110001",
        vtc: "New Delhi G.P.O.",
        landmark: '',
        loc: 'Kali Bari Marg, DIZ Area',
        street: 'BSNL Colony',
        house: '34/1 Type- V Ground Floor'
    }
    const [loc, setLoc] = React.useState(address.loc)
    const [street, setStreet] = React.useState(address.street)
    const [house, setHouse] = React.useState(address.house)
    const isActive = useMediaQuery("(max-width : 700px)");

    return ( 
        <Container className = { classes.containerReq }
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
        sx = {{ zIndex: isActive?'-1':'' } }
        onChange = {(e) => setHouse(e.target.value) }
        /> <br/>
        <TextField 
        label = "Street"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.street }
        value = { street }
        onChange = {
            (e) => setStreet(e.target.value) }
        /> <br/>
        <TextField 
        label = "Landmark"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.landmark }
        value = { loc }
        onChange = {
            (e) => setLoc(e.target.value) }
        /> <br/>
        <TextField 
        label = "Location"
        sx = {{ zIndex: isActive?'-1':'' } }
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
        sx = {{ zIndex: isActive?'-1':'' } }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <br/>
        <TextField 
        label = "Post Office"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.po }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <br></br>
        <TextField 
        label = " Sub District"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.subDist }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <br></br>
        <TextField 
        label = "District"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.dist }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <br></br>
        <TextField 
        label = "Pin Code"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.pc }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <br></br>
        <TextField
        label = "State"
        sx = {{ zIndex: isActive?'-1':'' } }
        defaultValue = { address.state }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <br></br>
        <TextField 
        label = "Country"
        sx = {{ zIndex: isActive?'-1':'' } }
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
        </Button> </Container>

    );
}

export default Requests;