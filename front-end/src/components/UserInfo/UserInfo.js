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
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvN0BqdWFuLmNvbSIsInVzZXJpZCI6IjVhOWIwYmM3MzA2ZjljMjAwYzkwM2NkZiIsIm1lZGljIjpmYWxzZSwiaWF0IjoxNTIwMjAzMTcyLCJleHAiOjE1MjAyMDY3NzJ9.dzJS4S6LUqGXhx63E-9v3uiVZ4535Po6hpKIV34tj8U";
    var idPac = "5a9b0bc7306f9c200c903ce0";
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