import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SideMedic extends Component {

  render() {
    return (
      <div className="sidenav">
        <Link to="/pacients">Pacient List</Link>
        <Link to="/pacient">Create Pacient</Link>
      </div>
    );
  }
}