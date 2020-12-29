import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import colors from '../utils/colors'


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav className={colors.secondary} role="navigation">
        <div className="nav-wrapper container">
          <Link id="logo-container"
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Crowdmail
          </Link>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
          <ul id="nav-mobile" className="sidenav">{this.renderContent()}</ul>
          <a href="#" data-target="nav-mobile" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
