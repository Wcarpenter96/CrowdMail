import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const SurveyCard = (props) => {
  const classes = useStyles();

  const [raised, setRaised] = useState(false);

    return (
      <Link to={`surveys/id/${props._id}`}><Card
          className={classes.root}
          onMouseOver={() => setRaised(true)}
          onMouseOut={() => setRaised(false)}
          raised={raised}
        >
          <CardContent>
            <Typography
              className={props.title}
              color="textSecondary"
              gutterBottom
            >
              {new Date(props.dateSent).toLocaleDateString()}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.body}
            </Typography>
            <Typography variant="body2" component="p">
              Yes: {props.yes}
              <br />
              No: {props.no}
            </Typography>
          </CardContent>
        </Card></Link>
    );
};

export default SurveyCard;

