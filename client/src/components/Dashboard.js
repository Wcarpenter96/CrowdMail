import React from "react";
import { Link, Route } from "react-router-dom";

import SurveysPage from "./surveys/SurveysPage";
import SurveyPage from "./surveys/SurveyPage";
import ProfilePage from "./profile/ProfilePage";
import SettingPage from "./settings/SettingPage";
import ResponsiveDrawer from "./Drawer";
import Header from "./Header";

import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  buttonRight: {
    position: "fixed",
    bottom: 0,
    right: 0,
  },
  margin: {
    margin: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Header drawer />
        <ResponsiveDrawer />
        <Route exact path="/surveys" component={SurveysPage} />
        <Route path="/surveys/id/:survey_id" component={SurveyPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/settings" component={SettingPage} />
      </div>
      <div className={classes.buttonRight}>
      <Link to="/surveys/new">
        <Fab color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon />
        </Fab>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
