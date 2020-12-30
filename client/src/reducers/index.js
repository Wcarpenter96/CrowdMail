import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import mobileReducer from "./mobileReducer";

export default combineReducers({
  auth: authReducer,
  mobileOpen: mobileReducer,
  surveys: surveysReducer,
  form: reduxForm,
});
