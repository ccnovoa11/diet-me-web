import React, { Component } from "react";
import Logout from "./Logout";

export class HeaderMedic extends Component {

  render() {
    return (
      <div id="head">
        <div className="row">
          <div className="col-sm-6">
            <h4 className="letter">DIETME</h4>
          </div>
          <div className="col-sm-6">
            <Logout/>  
          </div>
        </div>
      </div>
    );
  }
}