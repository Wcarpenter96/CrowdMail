import React, { useState, useEffect } from "react";
import { fetchSurveys } from "../../actions";
import colors from "../../utils/colors";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SurveyCard from "./SurveyCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const SurveyPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurveys());
  });

  const surveys = useSelector((state) => state.surveys);

  return surveys.reverse().map((survey) => {
    return (
      <Grid item sm={12} md={6} lg={4} key={survey._id}>
        <SurveyCard {...survey} />
      </Grid>
    );
  });
};

export default SurveyPage;
