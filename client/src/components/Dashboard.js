import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SurveysPage from "./surveys/SurveysPage";
import SurveyPage from "./surveys/SurveyPage";
import ProfilePage from "./profile/ProfilePage";
import SettingPage from "./settings/SettingPage";
import ResponsiveDrawer from "./Drawer";
import Header from "./Header";
import { fetchSurvey } from "../actions";

import { Fab, Typography, Backdrop } from "@material-ui/core";
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
    margin: theme.spacing(3)
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const surveys = useSelector((state) => state.surveys);

  useEffect(() => {
    dispatch(fetchSurvey());
  }, []);

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
      { !surveys.length &&
        (<Typography variant="h">Create your first one here.</Typography>)
      }
      <Link to="/surveys/new">
        <Fab color="secondary" aria-label="add" style={{margin:"30px"}} className={`${surveys.length ? '' : 'pulse'}`}>
            <AddIcon />
        </Fab>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
