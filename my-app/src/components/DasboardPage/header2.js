import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Divider, Tab} from "@mui/material";
import { styled } from '@mui/material/styles';

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

const useStyles = makeStyles((theme) => {
  console.log("theme: ", theme);
  return {
    parent: {
        height: "10vh",
        paddingBottom:'1%',
        // border:'2px solid black',
        display:'flex',
        justifyContent:'space-between',
        background:
        "transparent linear-gradient(90deg, #ffbf80 0%, #FFFFFF 49%, #9FCF9A 100%, #138808 100%) 0% 0% no-repeat padding-box", 
    },
    image: {
        height: "120%",
        maxHeight:'20vw',
       
    },
    image2: {
        height: "90%",
        maxHeight:'15vw',
        padding:'0.8%',
        marginLeft:'2%',
    },
    box1:{
        display:'flex',
        alignItems:'center',
        marginLeft:'2%',
        paddingTop:'0.5%'
    },
    box2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        justifySelf:'flex-end',
    },
    bar:{
        border:'2px solid #696969',
        margin: '2%',
        width:'60%',
        height:'5%'
    },
    button:{
        display:'flex',
        flexDirection:'column',
        justifyItems:'center !important', 
        justifyContent:'space-around',
        alignItems:'center !important'
    },
    border:{
        display:'flex',
        alignItems:'center !important',
        paddingTop:'2.3%',
        paddingRight:'5%',
        width:'100%',
        alignSelf:'center',
    }
  };
});

function HeaderApp() {
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width : 700px)");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className={classes.parent}>
      <Box className={classes.box1} component="div" height="100%" >
        <img
          className={classes.image2}
          src="https://iconape.com/wp-content/png_logo_vector/aadhar-logo.png"
        ></img>
         <img
          className={classes.image}
          src="https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal_Black_Transparent.png"
        ></img>
      </Box>
      <Box className={classes.box2}>
      {isActive?(<div>
        <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          border='2px solid black'
          className={classes.button}
        >
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link as={MenuItem} underline='none' href="../app">Home</Link>
                    <Link as={MenuItem} underline='none' href="../req">Create Request</Link>
                    <Link as={MenuItem} underline='none' href="../reqs">View Requests</Link>
                    <Link as={MenuItem} underline='none' href="../">Logout</Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
                </div>):
                (<div className={classes.border}>
                    <Link as={AntTab} label='Home' underline='none' href="../app"/>
                    <Link as={AntTab} label='Create Request' underline='none' href="../req"/>
                    <Link as={AntTab} label='View Requests' underline='none' href="../reqs"/>
                    <Link as={AntTab} label='Logout' underline='none' href="../"/>

                </div>)}
        </Box>
    </div>
  );
}

export default HeaderApp;
