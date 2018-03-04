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
      localStorage.setItem("idUser",res.body.userId);
      this.props.onSuccesfulLogin();

    });
    this.state.email="";
    this.state.password="";

  }


  render() {

    return (
      <div>
        <form onSubmit = {this.submitForm.bind(this)}>
          <label for="email"><b>Email</b></label><br/>
          <input 
            type="text" 
            placeholder="Enter Email" 
            name="email" 
            value ={this.state.email}
            onChange ={this.handleemailChanged.bind(this)}
            required/><br/>
          <label for="password"><b>Password</b></label><br/>
          <input 
            type="password" 
            placeholder="Enter Password" 
            name="psw" 
            value ={this.state.password}
            onChange={this.handlePasswordChanged.bind(this)}
            required /> <br/>
          <button className="buttonLog" type="submit" label="Submit"> Submit </button>

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