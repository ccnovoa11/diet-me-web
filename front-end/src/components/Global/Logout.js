import React from "react";
import { Redirect } from "react-router-dom";

export default class Logout extends React.Component {
  handleLogout() {
    localStorage.removeItem("token");
    this.setState();
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    return (token && token.length > 10);
  }

  render() {
    const isAlreadyAuth = this.isAuthenticated();
    return (
      <div>
        {isAlreadyAuth ? <Redirect to={{ pathname: "/Login" }} /> : (
          <button lable="LogOut" onTouchEnd={this.handleLogout.bind(this)}>LogOUT</button>

        )}
      </div>
    )
  }
}