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
  constructor(props){
    super(props);
    this.state={
      medic: false,
      auth: false
    };
    this.redirectMedic = this.redirectMedic.bind(this);
    this.redirectPacient = this.redirectPacient.bind(this); 
  }
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return (token && token.length > 10);
  }

  handleSuccesfulLogin(pMedic) {
    console.log("aaaaaaaaaaaaaaa");
    this.setState({
      medic: pMedic,
      auth: true
    }, () => { 
      if(!this.state.medic){
        fetch("/users/" + localStorage.getItem("idUser")).then(res => {
          return res.json();
        })
          .then(res =>{
            localStorage.setItem("idPacient", res.idPacient);
          });
      }
    });
  }
  
  redirectMedic(){
    if(this.state.medic && this.state.auth){
      return (<Redirect to={{pathname:"/pacients"}}/>);
    }
  }

  redirectPacient(){
    if(this.state.auth){
      return (<Redirect to={{pathname:"/day"}}/>);
    }
  }

  render() {
    console.log(this.redirectPacient());
    return (
      <Paper style={styles.paper}>
        <div>
          <h2 className="tittle">Login</h2>
          <LoginForm onSuccesfulLogin={this.handleSuccesfulLogin.bind(this)} />
        </div>
      </Paper>
    );
  }
}
