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

    return ( <
        Container className = { classes.containerReq }
        sx = {
            { height: !isActive ? "90vh" : "auto" } } >
        <
        Typography variant = "p"
        sx = {
            {
                fontSize: "1.5em",
                fontWeight: "bold",
                className: classes.head,
                textAlign: isActive ? "justify !important" : "center",
            }
        } >
        Address Form <
        /Typography> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "House Number/Location"
        defaultValue = { address.house }
        value = { house }
        sx = {
            { zIndex: '-1' } }
        onChange = {
            (e) => setHouse(e.target.value) }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Street"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.street }
        value = { street }
        onChange = {
            (e) => setStreet(e.target.value) }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Landmark"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.landmark }
        value = { loc }
        onChange = {
            (e) => setLoc(e.target.value) }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Location"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.loc }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Village / Town / City"
        defaultValue = { address.vtc }
        sx = {
            { zIndex: '-1' } }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Post Office"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.po }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = " Sub District"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.subDist }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "District"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.dist }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Pin Code"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.pc }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "State"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.state }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        TextField id = "outlined-read-only-input"
        label = "Country"
        sx = {
            { zIndex: '-1' } }
        defaultValue = { address.country }
        InputProps = {
            {
                readOnly: true,
            }
        }
        /> <
        br / >
        <
        Button variant = "contained"
        color = "success"
        style = {
            { maxWidth: '75%', padding: '1.5% 3%' } }
        type = "submit"
        sx = {
            { borderRadius: 28, alignSelf: 'center' } } >
        Submit address details <
        /Button> <
        /Container>

    );
}

export default Requests;