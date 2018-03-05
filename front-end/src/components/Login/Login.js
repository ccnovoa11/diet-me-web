import React from "react";
import Paper from "material-ui/Paper";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";


const styles = {
  paper: {
    minHeight: "100px",
    padding: "40px",
  }
};

export class Login extends React.Component {
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return (token && token.length > 10);
  }

  handleSuccesfulLogin() {
    this.setState();
  }

  render() {

    const isAlreadyAuth = this.isAuthenticated();
    const medic = localStorage.getItem("medic");
    console.log(medic);

    console.log("no debería pasar por aquí");
    return (
      <Paper style={styles.paper}>
        {isAlreadyAuth ? <Redirect to={{ pathname: "/day" }} /> : (
          <div>
            <h2 className="tittle">Login</h2>
            <LoginForm onSuccesfulLogin={this.handleSuccesfulLogin.bind(this)} />
          </div>
        )}
      </Paper>
    );
  }
}
