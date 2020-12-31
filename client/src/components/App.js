import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";


import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import palette from '../utils/palette'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.primary
    },
    secondary: {
      main: palette.secondary
    }
  }
});

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  },[]);
  const auth = useSelector((state) => state.auth);
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter> 
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys/" component={Dashboard} />
            <Route path="/surveys/id/:survey_id" component={Dashboard} />
            <Route exact path="/profile" component={Dashboard} />
            <Route exact path="/settings" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
      </ThemeProvider>
    );
}

export default App;
