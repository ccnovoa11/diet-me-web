import React, { Component } from "react";
import { Side } from "./Global/Side";
import { Header } from "./Global/Header";
import { HeaderMedic } from "./Global/HeaderMedic";
import { SideMedic } from "./Global/SideMedic";

export class App extends Component {

  render() {
    var medic = localStorage.getItem("medic");
    medic = true;
    return (
      <div>
        <div>
          { medic ? <SideMedic /> : <Side />}
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}