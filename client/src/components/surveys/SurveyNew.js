// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import Header from "../Header";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: "90px",
  },
}));

const SurveyNew = () => {
  const classes = useStyles();
  const [showFormReview, setShowFormReview] = useState(false);

  if (showFormReview) {
    return (
      <div className={classes.root}>
        <Header  />
        <div className={classes.content}>
          <SurveyFormReview
            onCancel={() => setShowFormReview(false)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
           <Header />
        <div className={classes.content}>
          <SurveyForm
            onSurveySubmit={() => setShowFormReview(true)}
          />
        </div>
      </div>
    );
  }
};

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
