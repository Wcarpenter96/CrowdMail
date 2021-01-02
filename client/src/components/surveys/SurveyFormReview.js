// shows user their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import formFields from "./formFields";
import * as actions from "../../actions";

import { Typography, Button, Grid, Divider, IconButton } from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardArrowLeft";
import MailIcon from "@material-ui/icons/Mail";
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
  greeting: {
    margin: theme.spacing(2),
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
      <Typography item variant="h5">
            <IconButton onClick={onCancel}>
              <BackIcon />
            </IconButton>
          Please confirm your entries
        </Typography>
        <Divider variant="middle" className={classes.greeting} />
      {reviewFields}
      <Divider variant="middle" className={classes.greeting} />
      <Grid container justify="flex-end"  >
          <Grid item>
          <Button
            color="primary"
            onClick={() => submitSurvey(formValues, history)}
            size="large"
          >
            Send Survey <MailIcon style={{padding:"5px"}} fontSize="large"/>
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
