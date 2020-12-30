import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

import Payments from "./Payments";
import colors from "../utils/colors";
import { setMobileOpen } from "../actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarDrawer: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: colors.secondary,
  },
  appBarFull: {
    background: colors.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: colors.primary,
  },

  title: {
    flexGrow: 1,
    color: colors.primary,
  },
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
      light
      position="fixed"
      className={props.drawer ? classes.appBarDrawer : classes.appBarFull}
      style={{ background: colors.secondary }}
    >
      <Toolbar>
        {props.drawer && (
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className={classes.menuButton}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        )}
        <Typography variant="h5" className={classes.title}>
          <Link
            className={classes.title}
            id="logo-container"
            to={auth ? "/surveys" : "/"}
          >
            Crowdmail
          </Link>
        </Typography>
        {auth && (
          <div>
            <Payments className={classes.menuButton} />
            <Typography className={classes.menuButton} variant="button">
              Credits: {auth.credits}
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color={colors.primary}
            >
              <AccountCircle />
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/api/logout">Logout</a>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
