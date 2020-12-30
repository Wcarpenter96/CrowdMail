import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const SurveyCard = (props) => {
  const classes = useStyles();

  const [raised, setRaised] = useState(false);

    return (
    <Card
          className={classes.root}
          onMouseOver={() => setRaised(true)}
          onMouseOut={() => setRaised(false)}
          onClick={() => console.log(props._id)}
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
        </Card>
    );
};

export default SurveyCard;

