import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: "100px",
  },
  greeting: {
    margin: theme.spacing(2),
  },
}));

const SettingPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className={classes.content}>
      <Typography variant="h5">Settings</Typography>
      <Divider variant="middle" className={classes.greeting} />
    </div>
  );
};

export default SettingPage;
