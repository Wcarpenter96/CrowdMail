import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setMobileOpen } from "../actions";

import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const mobileOpen = useSelector((state) => state.mobileOpen);
  const dispatch = useDispatch();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/surveys" style={{ padding: "0px" }}>
          <ListItem button>
            <ListItemText>
              <Typography color="primary" variant="h6">
                Dashboard
              </Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/surveys/new" style={{ padding: "0px" }}>
          <ListItem button>
            <ListItemText>
              <Typography color="primary">Create New</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemText>
            <Typography color="error">Drafts (coming soon!)</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/profile" style={{ padding: "0px" }}>
          <ListItem button>
            <ListItemText>
              <Typography variant="h6" color="secondary">
                My Profile
              </Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/settings" style={{ padding: "0px" }}>
        <ListItem button>
          <ListItemText>
            <Typography color="secondary">Advanced Settings</Typography>
          </ListItemText>
        </ListItem>
        </Link>
        <ListItem button component="a" href="/api/logout">
          <ListItemText>
            <Typography color="secondary">Logout</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const handleDrawerToggle = () => {
    dispatch(setMobileOpen(mobileOpen));
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;
