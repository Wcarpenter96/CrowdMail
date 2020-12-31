import React from "react";

import Header from "./Header";

import { Grid, Card, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "100px",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div >
      <Header />
      <Grid
        className={classes.content}
        container
        justify="center"
        justify="center"
        alignItems="center"
        direction="column"
        spacing={5}
      >
        <Grid item>
          <Typography color="primary" variant="h1">
            Crowdmail
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textPrimary" variant="body1">
            An email-based data annotation SAS provider
          </Typography>
        </Grid>
        <Grid item>
          <Card >
            <Button size="large" color="primary" variant="contained" href="/auth/google">Get Started</Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
