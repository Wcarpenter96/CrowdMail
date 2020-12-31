import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSurvey } from "../../actions";
import SurveyDetail from "./SurveyDetail";

import { Fab, Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackIcon from "@material-ui/icons/ArrowLeftTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  greeting: {
    margin: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: "100px",
  },
  buttonLeft: {
    position: "fixed",
    bottom: 0,
  },
  margin: {
    margin: theme.spacing(3),
  }
}));

const SurveyPage = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurvey());
  }, []);

  const surveys = useSelector((state) => state.surveys);

  const survey_id = match.params.survey_id;

  return (
    <div className={classes.content}>
      <Typography variant="h5">Survey Details</Typography>
      <Divider variant="middle" className={classes.greeting} />
      <Grid color="primary" container spacing={3}>
        {surveys
          .filter((survey) => survey._id == survey_id)
          .map((survey) => {
            return (
              <div>
                <SurveyDetail {...survey} />
              </div>
            );
          })}
      </Grid>
      <div className={classes.buttonLeft}>
      <Link to="/surveys">
        <Fab variant="extended" color="secondary" aria-label="back" className={classes.margin}>
            <BackIcon />Back 
        </Fab>
        </Link>
        </div>
    </div>
  );
};

export default SurveyPage;
