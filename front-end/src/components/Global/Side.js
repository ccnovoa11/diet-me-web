import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Side extends Component{
	handdle(){
    localStorage.removeItem("token");
    localStorage.removeItem("idUser");
    localStorage.removeItem("medic");
    localStorage.removeItem("idPacient");
    this.setState();
  }

  render(){
    return(
      <div className="sidenav">
        <Link to="/info">Info</Link>
        <Link to="/day">Day</Link>
        <Link to="/createMenu">Create Menu</Link>
        <Link to= "/login"> Login </Link>
      </div>
    );
  }
}