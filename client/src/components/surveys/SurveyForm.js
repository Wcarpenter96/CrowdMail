// Shows a form for a user to add input
import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

import {
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
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

const SurveyForm = (props) => {
  const classes = useStyles();

  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        <Typography item variant="h5">
          <Link to="/surveys">
            <IconButton>
              <BackIcon />
            </IconButton>
          </Link>
          Survey Details
        </Typography>
        <Divider variant="middle" className={classes.greeting} />
        {renderFields()}
        <Grid container justify="flex-end"  >
          <Grid item>
          <Button color="primary" size="large" type="submit">
            Next <NextIcon />
          </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.forEach(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
