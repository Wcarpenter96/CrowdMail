// Shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

import { Button, Grid } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowLeftOutlined";
import NextIcon from "@material-ui/icons/ArrowRight";

const SurveyForm = (props) => {
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
        {renderFields()}
        <Grid container alignItems="center" justify="space-between">
        <Grid item>
        <Link to="/surveys">
          <Button color="secondary" ><BackIcon/> Cancel</Button>
        </Link>
        </Grid>
        <Grid item>
        <Button color="primary" type="submit">
          Next <NextIcon/>
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
  return errors
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
