import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSurvey } from "../../actions";
import SurveyCard from "./SurveyCard";

import { Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const SurveysPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurvey());
  },[]);

  const surveys = useSelector((state) => state.surveys);

  return (
    <div className={classes.content}>
      <Typography variant="h5">My Surveys</Typography>
      <Divider variant="middle" className={classes.greeting} />
      <Grid color="primary" container spacing={3}>
        {surveys.reverse().map((survey) => {
          return (
            <Grid item sm={12} md={6} lg={4} key={survey._id}>
              <SurveyCard {...survey} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SurveysPage;
