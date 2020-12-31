import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

import { Button, Typography } from "@material-ui/core";


class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Test"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button color="secondary" variant="contained" ><Typography color="primary">Add Credits</Typography></Button> 
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
