// shows user their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import formFields from "./formFields";
import * as actions from "../../actions";

import { Typography, Button, Grid, Divider } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowLeftOutlined";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divide: {
    margin: "20px",
  },
}));

function SurveyFormReview({ onCancel, formValues, submitSurvey, history }) {
  const classes = useStyles();

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <Grid item key={name}>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="body1">{formValues[name]}</Typography>
      </Grid>
    );
  });
  return (
    <div>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Typography variant="h5">Please confirm your entries:</Typography>
        </Grid>
        <Divider className={classes.divide} />
        {reviewFields}
        <Divider className={classes.divide} />
      </Grid>

      <Grid container spacing={3} direction="row" justify="space-between">
        <Grid item>
          <Button color="secondary" onClick={onCancel}>
            <BackIcon /> Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            onClick={() => submitSurvey(formValues, history)}
          >
            Send Survey <i className="material-icons right">email</i>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
