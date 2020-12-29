import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import Sidebar from "./Sidebar";
import colors from '../utils/colors'

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar/>
      <h2 className={`${colors.primary}-text`}>Welcome, Weston.</h2>
      <SurveyList/>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className={`btn-floating btn-large ${colors.secondary}`}>
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
