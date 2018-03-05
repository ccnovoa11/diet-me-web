import React, { Component } from "react";
import { PersonalInfo } from "./PersonalInfo";

export class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pacient: {}
    };
  }

  getPacient() {
    var token = localStorage.getItem("token");
    var idPac = localStorage.getItem("idPacient");
    fetch("/pacients/"+idPac, {
      headers: {
        token: token 
      }
    })
      .then(res => res.json())
      .then(p => this.setState({ pacient: p.pacient }));
  }

  componentDidMount() {
    this.getPacient();
  }

  render() {
    console.log(this.state.pacient);
    return (
      <div>
        <div>
          <h1 className="tittle">My Information</h1>
        </div>
        <div>
          <PersonalInfo user={this.state.pacient} />
        </div>
       
      </div>
    );
  }
}