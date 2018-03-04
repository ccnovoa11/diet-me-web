import React from "react";
import TextField from "material-ui/TextField";
import superagent from "superagent";
import { Redirect } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    }
  }

  handleemailChanged(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    superagent.post("/users/login").send({ email: this.state.email, password: this.state.password }).end((err, res) => {
      if (err) { this.setState({ errorMessage: "Cannot Authenticate Failed" }); return; }
      localStorage.setItem("token", res.body.token);
      this.props.onSuccesfulLogin();
    });
  }
 

  render() {
    
    return (
      <div>
        
          <form onSubmit={this.submitForm.bind(this)}>
            <TextField
              hintText="email"
              floatingLabelText="email"
              value={this.state.email}
              onChange={this.handleemailChanged.bind(this)} /><br />

            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChanged.bind(this)} /><br /><br />

            <button type="submit" label="Submit" onClick = {this.submitForm.bind(this)} > Submit </button>


          </form>
      </div>

    );
  }
}


/**
<form onSubmit={this.submitForm.bind(this)}>
          <TextField
            hintText="email"
            floatingLabelText="email"
            value={this.state.email}
            onChange={this.handleemailChanged.bind(this)} /><br />

          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChanged.bind(this)} /><br /><br/>
          
          <button type = "submit" label = "Submit" > Submit </button>

        
        </form>
        */