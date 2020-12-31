import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import SurveysPage from "./surveys/SurveysPage";
import SurveyPage from "./surveys/SurveyPage";
import ProfilePage from "./profile/ProfilePage";
import SettingPage from "./settings/SettingPage";
import ResponsiveDrawer from "./Drawer";
import Header from "./Header";

import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
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
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Header drawer />
        <ResponsiveDrawer />
        <Route exact path="/surveys" component={SurveysPage} />
        <Route path="/surveys/:survey_id" component={SurveyPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/settings" component={SettingPage} />
      </div>
      <div className={classes.buttonRight}>
        <IconButton>
          <Link to="/surveys/new">
            <AddCircleIcon style={{ fontSize: 50 }} color="primary" />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Dashboard;
