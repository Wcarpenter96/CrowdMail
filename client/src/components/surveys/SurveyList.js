import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSurveys } from "../../actions";
import SurveyCard from "./SurveyCard";

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const SurveyList = () => {
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

export default SurveyList;
