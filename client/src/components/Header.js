import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";
import { setMobileOpen } from "../actions";

import {
  AppBar,
  Toolbar,
  Hidden,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarDrawer: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const mobileOpen = useSelector((state) => state.mobileOpen);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    dispatch(setMobileOpen(mobileOpen));
  };

  return (
    <AppBar
      color = "white"
      position="fixed"
      className={props.drawer ? classes.appBarDrawer : classes.appBarFull}
    >
      <Toolbar>
        {props.drawer && (
          <Hidden smUp implementation="css">
            <IconButton
              aria-label="open drawer"
              edge="start"
              className={classes.menuButton}
              onClick={handleDrawerToggle}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        )}
          <Link 
            className={classes.title}
            id="logo-container"
            to={auth ? "/surveys" : "/"}
          >
            <Typography color="primary" variant="h5" className={classes.title} >Crowdmail</Typography>
          </Link>
        {auth && (
          <div>
            <Payments className={classes.menuButton} />
            <Typography className={classes.menuButton} color="primary" variant="button">
              Credits: {auth.credits}
            </Typography>
            <IconButton
              color="primary"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Typography color="textPrimary" >Profile</Typography></MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/api/logout"><Typography color="textPrimary">Logout</Typography></a>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
