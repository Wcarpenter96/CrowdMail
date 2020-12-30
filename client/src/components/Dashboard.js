import React from "react";
import { Link } from "react-router-dom";

import SurveyList from "./surveys/SurveyList";
import ResponsiveDrawer from "./Drawer";
import colors from "../utils/colors";
import Header from "./Header";

import { Grid, Typography, Divider, IconButton  } from '@material-ui/core';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";

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
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: "90px",
  },
  buttonRight: {
    position: "fixed",
    bottom: 0,
    right: 0
  },
  addSurvey: {
    color: colors.primary,
    fontSize: "50px",
  },
  greeting: {
    margin: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Header drawer />
        <ResponsiveDrawer />
        <div className={classes.content}>
          <Typography variant='h5'>My Surveys</Typography>
          <Divider variant="middle" className={classes.greeting}/>
          <Grid container spacing={3}>
            <SurveyList />
          </Grid>
        </div>
      </div>
      <div className={classes.buttonRight}>
        <IconButton>
          <Link to="/surveys/new">
            <AddCircleIcon className={classes.addSurvey} />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Dashboard;
