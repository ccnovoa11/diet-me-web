import React, { Component } from "react";
import { MenuItem } from "./MenuItem";
import axios from "axios";
import superagent from "superagent";

export class Day extends Component {

  componentWillMount() {
    this.setState({
      menus: []
    });
  }

  getMenus() {
    
    fetch("/users/" + localStorage.getItem("idUser")).then(res => { 
      return res.json(); 
    }).then(myJson =>{
      console.log(myJson, "quien soy?");
      localStorage.setItem("idPacient",myJson.idPacient);
      console.log(localStorage.getItem("idPacient"));

      var token = localStorage.getItem("token");
      var idPac = localStorage.getItem("idPacient");
      fetch("/menus/menusPac", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": token
        },
        body: JSON.stringify({ idPacient: idPac })
  
      }).then(res => res.json())
        .then(p => { console.log(p); this.setState({ menus: p.menus }); });
    });
  




  }

  componentDidMount() {
    this.getMenus();
  }

  render() {
    console.log(this.state.menus);
    return (
      <div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Add Menu
					</button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.menus.map((d, index) => {
              return <MenuItem name={d.name} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}