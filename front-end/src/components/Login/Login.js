import React from "react";
import Paper from "material-ui/Paper";

import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const styles = {
  paper: {
    minHeight: "100px",
    padding: "40px",
  }
};

export class Login extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <LoginForm />
      </Paper>
    )
  }
}