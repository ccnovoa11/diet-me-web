import React, { Component } from "react";
import { Side } from "./Global/Side";
import { Header } from "./Global/Header";
import {HeaderMedic} from "./Global/HeaderMedic";
import {SideMedic} from "./Global/SideMedic";

export class App extends Component {

  
  render() {
    const medic = localStorage.getItem("medic");

    if(medic==false){
      return (
        <div>
          <div>
            <Side />
          </div>
          <div className="main">
            <Header />
          </div>
          <div className="main">
            {this.props.children}
          </div>
        </div>
      );
    }else{
      return (
        <div>
          <div>
            <SideMedic />
          </div>
          <div className="main">
            <HeaderMedic />
          </div>
          <div className="main">
            {this.props.children}
          </div>
        </div>
      );
    }

  }
}