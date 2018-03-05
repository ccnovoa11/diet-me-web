import React, { Component } from "react";

export class Header extends Component {

  render() {
    return (
      <div id="head">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-2">
            <h4 className="letter">DIETME</h4>
          </div>
        </div>
      </div>
    );
  }
}